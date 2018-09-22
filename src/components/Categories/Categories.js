import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Category from 'Components/Category/Category';
import MediaContainer from 'Components/Media/Media.container';
import Navbar from 'Pages/presentational/navbar';
import Search from 'Components/search/container/search';

import './Categories.css';

const Categories = props => {
  const { categories, search } = props;

  const renderSearchResults = () => (
    <Fragment>
      {
        !!search.size && (
          <ul className="categories__search-results">
            {search.map(item => {
              const id = item.get('id');

              return (
                <li key={id}>
                  <MediaContainer id={id} />
                </li>
              );
            })}
          </ul>
        )
      }
    </Fragment>
  );

  const renderCategories = () => (
    <Fragment>
      {
        props.categories.map(category => <Category key={category.get('id')} {...category.toJS()} />)
      }
    </Fragment>
  );

  return (
    <div className="categories">
      <Navbar />

      <Search />

      {renderSearchResults()}

      {renderCategories()}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  search: PropTypes.array
};

Categories.defaultProps = {
  categories: [],
  search: []
};

export default Categories;