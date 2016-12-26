import React from 'react'
import Dropdown from 'components/dropdown'

export default React.createClass({
    getInitialState() {
        return {
            selectItem: '河南省',
            data: ['河南省', '河北省', '湖南省', '湖北省']
        }
    },
    onSelected(item) {
        this.setState({ selectItem: item })
    },
    render() {
        return (
            <div>
                <Dropdown data={this.state.data} onChange={this.onSelected} />
                <span> 你选择了：{this.state.selectItem}</span>
            </div>
        )
    }
})
