import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/06/337-9918-006/337-9918-006_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Tênis muito supimpa</strong>
                <span>129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-mizuno-strike-2-n-masculino/92/D16-2915-392/D16-2915-392_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Tênis muito supimpa</strong>
                <span>129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Tênis muito supimpa</strong>
                <span>129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/10/E74-0492-010/E74-0492-010_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Tênis muito supimpa</strong>
                <span>129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Tênis muito supimpa</strong>
                <span>129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/89/D24-1738-489/D24-1738-489_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Tênis muito supimpa</strong>
                <span>129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
