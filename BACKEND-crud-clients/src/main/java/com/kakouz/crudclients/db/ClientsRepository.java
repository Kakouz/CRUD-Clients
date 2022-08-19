package com.kakouz.crudclients.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kakouz.crudclients.models.Clients;

@Repository
public interface ClientsRepository extends JpaRepository<Clients, Integer> {
    
}
