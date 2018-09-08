package com.concretepage.dao;

import com.concretepage.entity.Article;
import com.concretepage.entity.Product;

import java.util.List;

public interface IProductDAO {
    List<Product> getAllProducts();
    Product getProductById(int productId);
    void addProduct(Product product);
//    void updateUser(Product product);
    void deleteProduct(int productId);
    boolean productExists(String name);
}
