package com.concretepage.service;

import com.concretepage.dao.IOrdersRowDAO;
import com.concretepage.entity.Order;
import com.concretepage.entity.OrdersRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersRowService implements IOrdersRowService {
    @Autowired
    private IOrdersRowDAO ordersRowDAO;

    @Override
    public List<OrdersRow> getAllOrdersRows() {
        return ordersRowDAO.getAllOrders();
    }

    @Override
    public void addOrderRow(OrdersRow ordersRow) {
        ordersRowDAO.addOrder(ordersRow);
    }
}
