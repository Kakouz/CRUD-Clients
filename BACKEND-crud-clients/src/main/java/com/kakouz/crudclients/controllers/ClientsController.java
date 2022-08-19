package com.kakouz.crudclients.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kakouz.crudclients.models.Clients;
import com.kakouz.crudclients.services.ClientsService;



@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*")
public class ClientsController {
    
    @Autowired
    ClientsService clientsService;

    @PostMapping
    ResponseEntity<Clients> createUser(@RequestBody @Valid Clients client) {
        return ResponseEntity.status(HttpStatus.CREATED).body(clientsService.createUser(client));
    }

    @GetMapping
    ResponseEntity<List<Clients>> getUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(clientsService.getUsers());
    }

    @PutMapping("/{id}")
    ResponseEntity<Clients> updateUser(@PathVariable Integer id, @RequestBody @Valid Clients client) {
        return ResponseEntity.status(HttpStatus.OK).body(clientsService.updateUser(id, client));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Object> deleteUser(@PathVariable Integer id) {
        clientsService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("Deletado com sucesso!");
    }
}
