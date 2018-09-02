package com.concretepage.dao;

import com.concretepage.entity.User;

import java.util.List;

public interface IUserDAO {
    List<User> getAllUsers();
    User getUserById(int id);
    void addUser(User user);
    void deleteUser(int id);
    void updateUser(User user);
    boolean userExists(String email);
}
