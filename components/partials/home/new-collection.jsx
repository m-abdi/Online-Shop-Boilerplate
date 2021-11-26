import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';
import { productSlider } from '~/utils/data';

function NewCollection ( props ) {
    const { products = [], loading } = props;

    return (
        <div className="bg-light pt-5 pb-6 mb-3 arrival">
            <div className="container">
                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                    <div className="heading heading-center mb-3">
                        <h2 className="title">New Arrivals</h2>

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
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-simple carousel-equal-height" options={ productSlider } isTheme={ false }>
                                        {
                                            [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                                <div className="skel-pro" key={ index }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-simple carousel-equal-height" options={ productSlider } isTheme={ false }>
                                        {
                                            products.slice( 0, 5 ).map( ( item, index ) =>
                                                <ProductTwelve
                                                    product={ item }
                                                    key={ index } />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-simple carousel-equal-height" options={ productSlider } isTheme={ false }>
                                        {
                                            [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                                <div className="skel-pro" key={ index }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-simple carousel-equal-height" options={ productSlider } isTheme={ false }>
                                        {
                                            catFilter( products, [ 'women' ] ).slice( 0, 5 ).map( ( item, index ) =>
                                                <ProductTwelve
                                                    product={ item }
                                                    key={ index } />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-simple carousel-equal-height" options={ productSlider } isTheme={ false }>
                                        {
                                            [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                                <div className="skel-pro" key={ index }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-simple carousel-equal-height" options={ productSlider } isTheme={ false }>
                                        {
                                            catFilter( products, [ 'men' ] ).slice( 0, 5 ).map( ( item, index ) =>
                                                <ProductTwelve
                                                    product={ item }
                                                    key={ index } />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </TabPanel>
                    </div>

                </Tabs>
            </div>
        </div>
    )
}

export default NewCollection;