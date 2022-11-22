import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import body from './body'
import case_study from './case_study'
import client from './client'
import header from './header'
import hero from './hero'
import industry from './industry'
import page from './page'
import person from './person'
import photo from './photo'
import policy from './policy'
import section from './section'
import service from './service'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    body,
    case_study,
    client,
    header,
    hero,
    industry,
    page,
    person,
    photo,
    policy,
    section,
    service,
  ]),
})