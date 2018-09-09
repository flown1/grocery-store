package com.concretepage.dao;

import com.concretepage.entity.Order;
import com.concretepage.entity.OrdersRow;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
@Repository
public class OrdersRowDAO implements IOrdersRowDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public OrdersRow getOrderRowById(int id) {
        return entityManager.find(OrdersRow.class, id);
    }

    @Override
    public List<OrdersRow> getAllOrders() {
        String hql = "FROM OrdersRow as ordRow ORDER BY ordRow.id";
        return (List<OrdersRow>) entityManager.createQuery(hql).getResultList();
    }

    @Override
    public OrdersRow getUserLatestOrder(int userId) {
        return new OrdersRow();
    }

    @Override
    public List<OrdersRow> getAllUserOrdersRows(int userId) {
        //String hql = "FROM Orders as ord WHERE ord.userId = ?";
        return null;//entityManager.createQuery(hql).setParameter(1, userId).getResultList();
    }

    @Override
    public void addOrder(OrdersRow ordersRow) {
        try {
            entityManager.persist(ordersRow);
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}
