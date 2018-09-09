package com.concretepage.dao;

import com.concretepage.entity.Order;
import com.concretepage.entity.OrdersRow;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class OrderDAO implements IOrderDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void addOrder(Order order) {
        entityManager.persist(order);

//        entityManager.flush();
//        entityManager.refresh(entityManager);
    }
}
