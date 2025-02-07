// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

export const QUERY_LATEST_CHILD_BOUNTY_PROPOSALS = gql`
    query AllChildBountyPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5 ) {
        posts(limit: $limit, where: {
            type: {
                id: {
                    _eq: $postType
                }
            },
            topic: {
                id: {
                    _eq: $postTopic
                }
            },
            onchain_link: {
                onchain_child_bounty_id: {
                    _is_null: false
                }
            }
        }, order_by: {
            onchain_link: {
                id: desc
            }
        }) {
            id
            title
            author {
                ...authorFields
            }
            created_at
            updated_at
            comments_aggregate {
                aggregate {
                    count
                }
            }
            type {
                name
                id
            }
            topic {
                id
                name
            }
            onchain_link {
                id
                onchain_child_bounty_id
                onchain_child_bounty(where: {}) {
                    id
                    value
                    childBountyStatus(last: 1) {
                        id
                        status
                    }
                }
                proposer_address
            }
        }
    }
    ${authorFields}
`;
