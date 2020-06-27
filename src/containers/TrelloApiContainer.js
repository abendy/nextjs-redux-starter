import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import { getOrgs } from 'actions/orgs'
import ApiResponse from 'components/ApiResponse'

class SearchOrgContainer extends Component {
  static async getInitialProps ({ store, query }) {
    const id = query.id || 'me'
    await store.dispatch(getOrgs({ id }))
    return { id }
  }

  componentDidMount () {
    const { getOrgs } = this.props
    getOrgs({ id: 'me' })
  }

  render () {
    const { orgs } = this.props

    return (
      <Fragment>
        <div onClick={this._goToAbout}>
          GO TO ABOUT (with <code>router</code>)
        </div>
        <ApiResponse orgs={orgs} />
      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }
}

function mapStateToProps (state) {
  return {
    orgs: state.orgs
  }
}

SearchOrgContainer.propTypes = {
  orgs: PropTypes.instanceOf(Map).isRequired,
  getOrgs: PropTypes.func.isRequired
}

export { SearchOrgContainer }
export default connect(mapStateToProps, {
  getOrgs
})(SearchOrgContainer)
