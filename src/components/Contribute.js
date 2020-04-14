import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Contribute = ({ channel, heading }) => (
  <section className="featuredBlock-wrapper">
    <div class="siteContent">
      <div class="siteContent-inner">
        <h1>{heading}</h1>
        {channel.map((item, i) => (
          <div className="cardItem" key={i}>
            <PreviewCompatibleImage imageInfo={item} />
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
            <a href={item.url}>{item.button}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

Contribute.propTypes = {
  heading: PropTypes.string,
  channel: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string,
      url: PropTypes.string
    })
  ),
}

export default Contribute
