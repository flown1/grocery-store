package com.concretepage.controller;

import com.concretepage.entity.Order;
import com.concretepage.entity.OrdersRow;
import com.concretepage.entity.Product;
import com.concretepage.entity.utils.OrderPackage;
import com.concretepage.service.IOrderService;
import com.concretepage.service.IOrdersRowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("orders")
public class OrdersController {

    @Autowired
    private IOrdersRowService ordersRowService;

    @Autowired
    private IOrderService orderService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("orders")
    public ResponseEntity<List<OrdersRow>> getAllOrders() {
        List<OrdersRow> listOfOrderRows = ordersRowService.getAllOrdersRows();

        return new ResponseEntity<List<OrdersRow>>(listOfOrderRows, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("add")
    public ResponseEntity<Void> addOrder(@RequestBody OrderPackage orderPackage, UriComponentsBuilder builder) {
        System.out.println("orderPackage: " + orderPackage.userInfo.firstName);
        int userId = orderPackage.userInfo.userId;

        Order order = new Order();
        order.setStatus("not paid");

        DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

        Date today = Calendar.getInstance().getTime();
        String orderDate = df.format(today);

        order.setDate(orderDate);
        orderService.addOrder(order);
        int orderId = order.getId();

        List<Product> cart = orderPackage.cart;

        for(Product prod : cart){
            OrdersRow ordersRow = new OrdersRow();
            ordersRow.setUserId(userId);
            ordersRow.setOrderId(orderId);
            ordersRow.setProductId(prod.getId());
            ordersRow.setProductQuantity(prod.getQuantity());

            ordersRowService.addOrderRow(ordersRow);
        }

        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

}
