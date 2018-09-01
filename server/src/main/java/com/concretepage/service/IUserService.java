package com.concretepage.service;

import com.concretepage.entity.User;
import com.concretepage.entity.utils.PostReturnPackage;

import java.util.List;

public interface IUserService {
    List<User> getAllUsers();
    User getUserById(int id);
    boolean addUser(User user);
    void deleteUser(int id);
    void updateUser(User user);
}
