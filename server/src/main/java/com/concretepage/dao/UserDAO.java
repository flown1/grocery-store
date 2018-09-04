package com.concretepage.dao;

import com.concretepage.entity.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
@Repository
public class UserDAO implements IUserDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User getUserById(int userId) {
        return entityManager.find(User.class, userId);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> getAllUsers() {
        String hql = "FROM User as user1 ORDER BY user1.id";
        return (List<User>) entityManager.createQuery(hql).getResultList();
    }

    @Override
    public void addUser(User user) {
        user.setAdmin(false);
        entityManager.persist(user);
    }

    @Override
    public void updateUser(User newUser) {
        User user = getUserById(newUser.getUserId());
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setAddress(newUser.getAddress());
        user.setCity(newUser.getCity());
        user.setEmail(newUser.getEmail());
        user.setZipCode(newUser.getZipCode());

        entityManager.flush();
    }

    @Override
    public void deleteUser(int userId) {
        entityManager.remove(getUserById(userId));
    }

    @Override
    public boolean userExists(String email) {
        String hql = "FROM User as user WHERE user.email = ?";
        int count = entityManager.createQuery(hql).setParameter(1, email)
                .getResultList().size();
        return count > 0 ? true : false;
    }
}