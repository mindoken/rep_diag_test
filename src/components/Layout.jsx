import {React} from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
const Layout = () => {
    return (
        <>
            <header>
                <Navbar className="bg-body-tertiary" fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                            <Nav className="mr-auto">
                                <div className="header-rows">
                                <NavLink to="/">Дашборд</NavLink><br />
                                <NavDropdown title="Параметры" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/params">Модель здоровья клиента</NavDropdown.Item><br/>
                                    <NavDropdown.Item href="/params">Модель рекомендации <br/>целевых действий</NavDropdown.Item><br/>
                                    <NavDropdown.Item href="/params">Модель модель CrossSale/UpSale</NavDropdown.Item><br/>
                                </NavDropdown><br />
                                <NavLink to="/subs">Подписки</NavLink><br />
                                <NavLink to="/profile">Личный кабинет</NavLink><br />
                                <NavLink to="/settings">Настройки</NavLink><br />
                                <NavLink id="login" to="/login">Вход</NavLink><br/>
                                </div>
                            </Nav>
                    </Container>
                </Navbar>
                </header>
            <main className="container">
                <Outlet/>
            </main>
            
        </>
    )
}

export {Layout}