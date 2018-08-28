package com.concretepage.service;

import java.util.List;

import com.concretepage.entity.Product;

public interface IProductService {
    List<Product> getAllProducts();
    Product getProductById(int productId);
    boolean addProduct(Product product);
//    void updateUser(Product product);
    void deleteProduct(int productId);
}
