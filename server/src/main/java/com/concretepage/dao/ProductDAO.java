package com.concretepage.dao;

import com.concretepage.entity.Product;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
@Repository
public class ProductDAO implements IProductDAO {
    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public Product getProductById(int productId) {
        return entityManager.find(Product.class, productId);
    }
    @SuppressWarnings("unchecked")
    @Override
    public List<Product> getAllProducts() {
        String hql = "FROM Product as prod1 ORDER BY prod1.id";
        return (List<Product>) entityManager.createQuery(hql).getResultList();
    }
    @Override
    public void addProduct(Product product) {
        entityManager.persist(product);
    }
//    @Override
//    public void updateUser(Product product) {
//        Product prod1 = getArticleById(product.getProductId());
//        prod1.setTitle(product.getTitle());
//        prod1.setCategory(product.getCategory());
//        entityManager.flush();
//    }
    @Override
    public void deleteProduct(int productId) {
        entityManager.remove(getProductById(productId));
    }

    @Override
    public boolean productExists(String name) {
        String hql = "FROM Product as prod WHERE prod.name = ?";
        int count = entityManager.createQuery(hql).setParameter(1, name)
                .getResultList().size();
        return count > 0 ? true : false;
    }
}
