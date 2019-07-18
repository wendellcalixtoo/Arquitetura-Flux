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
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe2.jpg?resize=326:*"
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
        </ProductList>
    );
}
