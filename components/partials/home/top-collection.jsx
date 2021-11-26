import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/alink';
import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';

function TopCollection ( props ) {
    const { products = [], loading } = props;

    return (
        <div className="container">
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-center mb-3">
                    <h2 className="title">Top Selling Products</h2>

                    <TabList className="nav nav-pills justify-content-center" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link">All</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Women's</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Men's</span>
                        </Tab>
                    </TabList>
                </div>

                <div className="tab-content tab-content-carousel">
                    <TabPanel>
                        <div className="products just-action-icons-sm">
                            <div className="row">
                                {
                                    loading ?
                                        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                                <div className="skel-pro"></div>
                                            </div>
                                        )
                                        :
                                        products.slice( 0, 10 ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                                <ProductTwelve product={ item } />
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="products just-action-icons-sm">
                            <div className="row">
                                {
                                    loading ?
                                        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                                <div className="skel-pro"></div>
                                            </div>
                                        )
                                        :
                                        catFilter( products, [ 'women' ] ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                                <ProductTwelve product={ item } />
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="products just-action-icons-sm">
                            <div className="row">
                                {
                                    loading ?
                                        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                                <div className="skel-pro"></div>
                                            </div>
                                        )
                                        :
                                        catFilter( products, [ 'men' ] ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                                <ProductTwelve product={ item } />
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
            <div className="more-container text-center mt-5">
                <ALink href="/shop/sidebar/list" className="btn btn-outline-lightgray btn-more btn-round"><span>View more products</span><i className="icon-long-arrow-right"></i></ALink>
            </div>
        </div>
    )
}

export default TopCollection;