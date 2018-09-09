package com.concretepage.service;

import com.concretepage.entity.OrdersRow;

import java.util.List;

public interface IOrdersRowService {
    List<OrdersRow> getAllOrdersRows();
    void addOrderRow(OrdersRow order);
}
