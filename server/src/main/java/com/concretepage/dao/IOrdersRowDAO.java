package com.concretepage.dao;

import com.concretepage.entity.OrdersRow;

import java.util.List;

public interface IOrdersRowDAO {
    OrdersRow getOrderRowById(int id);
    List<OrdersRow> getAllOrders();
    OrdersRow getUserLatestOrder(int userId);
    List<OrdersRow> getAllUserOrdersRows(int userId);
    void addOrder(OrdersRow order);
}
