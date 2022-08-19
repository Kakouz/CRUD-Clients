package com.kakouz.crudclients.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kakouz.crudclients.db.ClientsRepository;
import com.kakouz.crudclients.models.Clients;

@Service
public class ClientsService {
    @Autowired
    ClientsRepository clientsRepository;

    public Clients createUser(Clients client) {
        return clientsRepository.save(client);
    }

    public List<Clients> getUsers() {
        return clientsRepository.findAll();
    }

    public Clients updateUser(Integer id, Clients client) {
        Optional<Clients> optionalClient = clientsRepository.findById(id);
        client.setId(optionalClient.get().getId());
        return createUser(client);
    }

    public void deleteUser(Integer id) {
        if(clientsRepository.existsById(id)) {
            clientsRepository.deleteById(id);
        }
    }
    
}
