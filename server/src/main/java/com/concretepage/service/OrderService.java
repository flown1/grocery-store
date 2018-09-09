package com.concretepage.service;

import com.concretepage.dao.IOrderDAO;
import com.concretepage.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderDAO orderDAO;

    public void addOrder(Order order){
        orderDAO.addOrder(order);
    }
}
