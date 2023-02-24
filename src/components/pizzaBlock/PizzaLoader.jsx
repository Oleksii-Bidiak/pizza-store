import React from 'react'
import ContentLoader from 'react-content-loader'

export const PizzaLoader = props => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="255" rx="10" ry="10" width="280" height="40" />
        <circle cx="140" cy="120" r="120" />
        <rect x="0" y="315" rx="10" ry="10" width="280" height="80" />
        <rect x="0" y="421" rx="10" ry="10" width="100" height="27" />
        <rect x="146" y="411" rx="10" ry="10" width="133" height="45" />
    </ContentLoader>
)
