import React, { Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


       export default class Header extends Component {
            constructor(props) {
                super(props);

                this.toggle = this.toggle.bind(this);
                this.state = {
                    isOpen: false,
                    navCollapsed: true,
                    showNavbar: false
                };
            }
            toggle() {
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }
            render() {
                const { navCollapsed } = this.state
                return (
                    <div>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">Dieral Clothing Store</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/">Keranjang</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/">Tentang Kami</NavLink>
                                    </NavItem>
                                
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                )
            }
        }