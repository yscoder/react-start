import React from 'react'
import Dropdown from '../css/dropdown.css'

export default React.createClass({
    getInitialState() {
        return {
            selectIndex: 0,
            show: false
        }
    },
    toggle() {
        this.setState({ show: !this.state.show })
    },
    onClickItem(item, i) {
        this.setState({
            selectIndex: i,
            show: !this.state.show
        })
        this.props.onChange(item, i)
    },
    render() {
        return (
            <div className={Dropdown.wrap + (this.state.show ? ' ' + Dropdown.in : '')}>
                <button type="button" className={Dropdown.btn} onClick={this.toggle}>{this.props.data[this.state.selectIndex]}</button>
                <ul className={Dropdown.menu}>
                    {
                        this.props.data.map((item, i) => (
                            <li className={Dropdown.item} key={item} onClick={this.onClickItem.bind(this, item, i)}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
})