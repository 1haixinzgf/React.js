import React, { Component } from 'react';
import './recommend.styl';
import { getCarousel, getNewAlbum } from '@/api/recommend.js';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import { CODE_SUCCESS } from '../../api/config';
import * as AlbumModel from '@/model/albums';
import Scroll from '@/common/scroll/Scroll'
class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: [],
      newAlbums: [],
      refreshScroll: false
    }
  }
  toLink (linkUrl) { // return一个箭头函数可以不用绑定this，相当于把toLink转化为箭头函数，this指向父对象 // 在定义的时候this指向组件，但发生的时候this发生改变
    return () => {
      // console.log(this) // 闭包中的this
      window.location.href = linkUrl;
    }
  }
  componentDidMount () { // 数据请求有时候会阻塞页面，所以应该在页面挂载之后
    getCarousel()
      .then(res => {
        console.log(res)
        if (res.code === CODE_SUCCESS) {
          this.setState({
            sliderList: res.data.slider
          }, () => { // 有数据之后再启动swiper
            if(!this.sliderSwiper) {
              this.sliderSwiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: 3000,
                autoplayDisableOnteraction: false,
                pagination: '.swiper-pagination'
              })
            }
          })//setState 异步
        }
      });
    getNewAlbum()
      .then(res => {
        if(res) {
          if(res.code === CODE_SUCCESS) {
            let albumList = res.albumlib.data.list;
            albumList.sort((a,b) => { // 将json中的数据按时间排序
              return new Date(b.public_time).getTime() - new Date(a.public_time).getTime()//如果return的是true，就不调换，如果return false 就换  a-b升序   b-a 降序
            });
            console.log(albumList)
            this.setState({
              newAlbums: albumList
            }, () => {
              this.setState({refreshScroll: true})
            })
          }
        }
      })
  }
  render () {
    const albums = this.state.newAlbums.map(item => {
      const album = AlbumModel.createAlbumByList(item)
      return(
        <div className="album-wrapper" key={album.mId}>
          <div className="left">
            <img src={album.img} width="100%" height="100%" alt={album.name}/>
          </div>
          <div className="right">
            <div className="album-name">
              {album.name}
            </div>
            <div className="singer-name">
              {album.singer}
            </div>
            <div className="public-time">
              {album.publicTime}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="music-recommend">
        <Scroll refresh={this.state.refreshScroll}>
          <div>
            <div className="slider-container">
              <div className="swiper-wrapper">
                {
                  this.state.sliderList.map(slider => {
                    return (
                      <div className="swiper-slide" key={slider.id}>
                        <a href="slider.linkUrl" className="slider-nav" onClick={this.toLink(slider.linkUrl)}>
                          <img src={slider.picUrl} width="100%" height="100%" alt=""/>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
              <div className="swiper-pagination"></div>
            </div>
              <div className="album-container">
                <div className="title">最新专辑</div>
                <div className="album-list">
                  {albums}
                </div>
            </div>
          </div>
      </Scroll>
        
      </div>
    )
  }
}
export default Recommend
