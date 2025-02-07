// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

export const QUERY_LATEST_REFERENDA = gql`
    query GetLatestReferendaPosts($postType: Int!, $limit: Int! = 5) {
        posts(limit: $limit, where: {
            type: {
                id: {
                    _eq: $postType
                }
            },
            onchain_link: {
                onchain_referendum_id: {
                    _is_null: false
                }
            }
        }, order_by: {
            onchain_link: {
                onchain_referendum_id: desc
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
                onchain_referendum_id
                onchain_referendum {
                    id
                    end
                    referendumStatus(last: 1) {
                        id
                        status
                    }
                    preimage {
                        id
                        method
                    }
                }
                proposer_address
            }
        }
    }
    ${authorFields}
`;

export const QUERY_COUNT_REFERENDA = gql`
    query ReferundumCount($postType: Int!) {
        posts_aggregate(where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_REFERENDA_WITH_VOTES_OF_USER = gql`
    query GetLatestReferendaPostsWithVotes($voter: String!, $referendumId: Int!){
        referendumVotes(where: {voter: $voter, referendum: {id: $referendumId}}) {
            voter
            vote
            lockedValue
            id
            conviction
        } 
    }        
`;