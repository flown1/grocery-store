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
        String hql = "FROM Users as user1 ORDER BY users.id";
        return (List<User>) entityManager.createQuery(hql).getResultList();
    }

    @Override
    public void addUser(User user) {
        entityManager.persist(user);
    }

    @Override
    public void updateUser(User user) {
//        User user1 = getArticleById(user.getProductId());
//        user1.setTitle(user.getTitle());
//        user1.setCategory(user.getCategory());
//        entityManager.flush();
    }

    @Override
    public void deleteUser(int userId) {
        entityManager.remove(getUserById(userId));
    }
//    @Override
//    public boolean articleExists(String title, String category) {
//        String hql = "FROM Product as prod1 WHERE prod1.id = ?";
//        int count = entityManager.createQuery(hql).setParameter(1, title)
//                .setParameter(2, category).getResultList().size();
//        return count > 0 ? true : false;
//    }
}