import Button from "../../components/button/button.component";

import {
  Breadcrumbs,
  Crumb,
  ProductDesc,
  ProductInfoImage,
  ProductInfoContent,
  ProductCategoryLink,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  Counter,
  ProductAdditional,
  ProductAdditionalTitle,
  ProductAdditionalInfoList,
  ProductAdditionalImage,
  ProductAdditionalInfoListItem,
  ProductAdditionalInfoTitle,
} from "./product.styles";

import Pet from "../../assets/pet.png";
import Watering from "../../assets/watering-plants.png";
import Sun from "../../assets/sunlight.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoriesLocalList } from "../../store/categories/category.selector";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItemToCart } from "../../store/cart/cart.reducer";

const Product = () => {
  const categoriesLocal = useSelector(selectCategoriesLocalList);
  const { title, id } = useParams();
  const [product, setProduct] = useState({
    name: `Bird's-nest fern`,
    imageUrl:
      "https://images.unsplash.com/photo-1636901942318-972ea62b4d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    price: "25,00 PLN",
  });

  useEffect(() => {
    for (const obj of categoriesLocal[title]) {
      if (obj.id === parseInt(id)) {
        setProduct(obj);
        break;
      }
    }
  }, [categoriesLocal]);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div>
      <Breadcrumbs>
        <Crumb>
          <Link to="/">Home</Link>
        </Crumb>
        <Crumb>
          <Link to="/sklep">Store</Link>
        </Crumb>
        <Crumb>
          <Link to={`/sklep/${title}`}>{title}</Link>
        </Crumb>
        <Crumb>
          <a>{product.name}</a>
        </Crumb>
      </Breadcrumbs>
      <ProductInfo role="region" aria-label="Szczegóły produktu">
        <ProductInfoImage>
          <img
            src={product.imageUrl}
            alt={`zdjęcie rośliny ${product.name}`}
            role="img"
            aria-labelledby="ariaa-label"
          />
          <p id="ariaa-label" className="visually-hidden">
            {product.imgDesc}
          </p>
        </ProductInfoImage>
        <ProductInfoContent>
          <div>
            <ProductCategoryLink to={`/sklep/${title}`}>
              {title}
            </ProductCategoryLink>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDesc>
              <p>{product.productDesc}</p>
            </ProductDesc>

            {product.productDescAdd && (
              <>
              <ProductAdditional aria-label="Dodatkowe informacje o produkcie">
                <ProductAdditionalTitle>
                  Additional Information:
                </ProductAdditionalTitle>
                <ProductAdditionalInfoList>
                  <ProductAdditionalInfoListItem>
                    <ProductAdditionalImage src={Sun} alt="ikona pełne słonce" />
                    <ProductAdditionalInfoTitle>
                      High Sunshine
                    </ProductAdditionalInfoTitle>
                  </ProductAdditionalInfoListItem>
  
                  <ProductAdditionalInfoListItem>
                    <ProductAdditionalImage src={Pet} alt="ikona zwierzęta" />
                    <ProductAdditionalInfoTitle>
                      Pet Friendly
                    </ProductAdditionalInfoTitle>
                  </ProductAdditionalInfoListItem>
  
                  <ProductAdditionalInfoListItem>
                    <ProductAdditionalImage src={Watering} alt="ikona konewka" />
                    <ProductAdditionalInfoTitle>
                      Water Regularly
                    </ProductAdditionalInfoTitle>
                  </ProductAdditionalInfoListItem>
                </ProductAdditionalInfoList>
              </ProductAdditional>
              </>
            )}
          </div>
          <div>
            <Counter>- 1 +</Counter>
            <Button onClick={addProductToCart}>Add To Cart</Button>
          </div>
        </ProductInfoContent>
      </ProductInfo>
    </div>
  );
};

export default Product;
