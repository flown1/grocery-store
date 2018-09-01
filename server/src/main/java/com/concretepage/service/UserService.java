package com.concretepage.service;

import com.concretepage.dao.IUserDAO;
import com.concretepage.entity.Product;
import com.concretepage.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserDAO userDAO;
    @Override
    public User getUserById(int userId) {
        return userDAO.getUserById(userId);
    }
    @Override
    public List<User> getAllUsers(){
        return userDAO.getAllUsers();
    }
    @Override
    public synchronized boolean addUser(User user){
//        if (articleDAO.articleExists(article.getTitle(), article.getCategory())) {
//            return false;
//        } else {
        userDAO.addUser(user);
        return true;
//        }
    }
    public void updateUser(User user) {
        userDAO.updateUser(user);
    }
    @Override
    public void deleteUser(int userId) {
        userDAO.deleteUser(userId);
    }
}
