import React from 'react';
import PropTypes from 'prop-types';

// Ant design
import { Row, Col } from 'antd';

// CSS
import * as Style from './Product.style';

export const Product = ({ product, goBack }) => (
	<>
		<Style.PageHeader title="Product" onBack={() => goBack()} />
		<Style.Container>
			<Row>
				<Col span={8} xs={24} lg={8}>
					<div className="title">{product.title}</div>
					<img src={product.img} alt="product" />
				</Col>
				<Col span={15} xs={24} lg={15}>
					<div className="subtitle">Product Id</div>
					<div className="description">#{product.id}</div>
					<div className="subtitle">Image path</div>
					<div className="description">{product.img}</div>
					<div className="subtitle">Description</div>
					<div className="description">{product.description}</div>
				</Col>
			</Row>
		</Style.Container>
	</>
);

Product.propTypes = {
	/* prop state */
	product: PropTypes.object.isRequired,
	goBack: PropTypes.func.isRequired,
};

export default Product;
