import { Fragment, useEffect, useState } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import PublishNews from '../components/CPublishNews'
const News = () => {


    return (
        <LayoutDefault hasMenu title="Últimas Notícias">
            <PublishNews/>
        </LayoutDefault>
    )
}

export default News;