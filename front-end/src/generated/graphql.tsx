import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  bpchar: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type About = {
  __typename?: 'About';
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type AddressLinkType = {
  __typename?: 'AddressLinkType';
  address_id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  sign_message?: Maybe<Scalars['String']>;
};

export type AddressLoginType = {
  __typename?: 'AddressLoginType';
  message?: Maybe<Scalars['String']>;
  signMessage?: Maybe<Scalars['String']>;
};

export type AggregateBlockIndex = {
  __typename?: 'AggregateBlockIndex';
  count: Scalars['Int'];
};

export type AggregateBlockNumber = {
  __typename?: 'AggregateBlockNumber';
  count: Scalars['Int'];
};

export type AggregateBounty = {
  __typename?: 'AggregateBounty';
  count: Scalars['Int'];
};

export type AggregateBountyStatus = {
  __typename?: 'AggregateBountyStatus';
  count: Scalars['Int'];
};

export type AggregateCouncil = {
  __typename?: 'AggregateCouncil';
  count: Scalars['Int'];
};

export type AggregateCouncilMember = {
  __typename?: 'AggregateCouncilMember';
  count: Scalars['Int'];
};

export type AggregateEra = {
  __typename?: 'AggregateEra';
  count: Scalars['Int'];
};

export type AggregateHeartBeat = {
  __typename?: 'AggregateHeartBeat';
  count: Scalars['Int'];
};

export type AggregateMotion = {
  __typename?: 'AggregateMotion';
  count: Scalars['Int'];
};

export type AggregateMotionProposalArgument = {
  __typename?: 'AggregateMotionProposalArgument';
  count: Scalars['Int'];
};

export type AggregateMotionStatus = {
  __typename?: 'AggregateMotionStatus';
  count: Scalars['Int'];
};

export type AggregateNomination = {
  __typename?: 'AggregateNomination';
  count: Scalars['Int'];
};

export type AggregateOfflineValidator = {
  __typename?: 'AggregateOfflineValidator';
  count: Scalars['Int'];
};

export type AggregatePreimage = {
  __typename?: 'AggregatePreimage';
  count: Scalars['Int'];
};

export type AggregatePreimageArgument = {
  __typename?: 'AggregatePreimageArgument';
  count: Scalars['Int'];
};

export type AggregatePreimageStatus = {
  __typename?: 'AggregatePreimageStatus';
  count: Scalars['Int'];
};

export type AggregateProposal = {
  __typename?: 'AggregateProposal';
  count: Scalars['Int'];
};

export type AggregateProposalStatus = {
  __typename?: 'AggregateProposalStatus';
  count: Scalars['Int'];
};

export type AggregateReferendum = {
  __typename?: 'AggregateReferendum';
  count: Scalars['Int'];
};

export type AggregateReferendumStatus = {
  __typename?: 'AggregateReferendumStatus';
  count: Scalars['Int'];
};

export type AggregateReward = {
  __typename?: 'AggregateReward';
  count: Scalars['Int'];
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  count: Scalars['Int'];
};

export type AggregateSlashing = {
  __typename?: 'AggregateSlashing';
  count: Scalars['Int'];
};

export type AggregateStake = {
  __typename?: 'AggregateStake';
  count: Scalars['Int'];
};

export type AggregateTechCommitteeProposal = {
  __typename?: 'AggregateTechCommitteeProposal';
  count: Scalars['Int'];
};

export type AggregateTechCommitteeProposalArgument = {
  __typename?: 'AggregateTechCommitteeProposalArgument';
  count: Scalars['Int'];
};

export type AggregateTechCommitteeProposalStatus = {
  __typename?: 'AggregateTechCommitteeProposalStatus';
  count: Scalars['Int'];
};

export type AggregateTip = {
  __typename?: 'AggregateTip';
  count: Scalars['Int'];
};

export type AggregateTipStatus = {
  __typename?: 'AggregateTipStatus';
  count: Scalars['Int'];
};

export type AggregateTotalIssuance = {
  __typename?: 'AggregateTotalIssuance';
  count: Scalars['Int'];
};

export type AggregateTreasurySpendProposal = {
  __typename?: 'AggregateTreasurySpendProposal';
  count: Scalars['Int'];
};

export type AggregateTreasuryStatus = {
  __typename?: 'AggregateTreasuryStatus';
  count: Scalars['Int'];
};

export type AggregateValidator = {
  __typename?: 'AggregateValidator';
  count: Scalars['Int'];
};

export type BlockIndex = Node & {
  __typename?: 'BlockIndex';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  index: Scalars['Int'];
  startFrom: Scalars['Int'];
};

/** A connection to a list of items. */
export type BlockIndexConnection = {
  __typename?: 'BlockIndexConnection';
  aggregate: AggregateBlockIndex;
  /** A list of edges. */
  edges: Array<Maybe<BlockIndexEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlockIndexEdge = {
  __typename?: 'BlockIndexEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BlockIndex;
};

export enum BlockIndexOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  StartFromAsc = 'startFrom_ASC',
  StartFromDesc = 'startFrom_DESC'
}

export type BlockIndexPreviousValues = {
  __typename?: 'BlockIndexPreviousValues';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  index: Scalars['Int'];
  startFrom: Scalars['Int'];
};

export type BlockIndexSubscriptionPayload = {
  __typename?: 'BlockIndexSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BlockIndex>;
  previousValues?: Maybe<BlockIndexPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BlockIndexSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BlockIndexWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BlockIndexWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockIndexWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockIndexWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockIndexWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  identifier_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  identifier_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  identifier_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  identifier_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  identifier_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  startFrom?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  startFrom_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  startFrom_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  startFrom_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  startFrom_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  startFrom_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  startFrom_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  startFrom_not_in?: Maybe<Array<Scalars['Int']>>;
};

export type BlockIndexWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
};

export type BlockNumber = Node & {
  __typename?: 'BlockNumber';
  authoredBy: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  number: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type BlockNumberConnection = {
  __typename?: 'BlockNumberConnection';
  aggregate: AggregateBlockNumber;
  /** A list of edges. */
  edges: Array<Maybe<BlockNumberEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlockNumberEdge = {
  __typename?: 'BlockNumberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BlockNumber;
};

export enum BlockNumberOrderByInput {
  AuthoredByAsc = 'authoredBy_ASC',
  AuthoredByDesc = 'authoredBy_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  StartDateTimeAsc = 'startDateTime_ASC',
  StartDateTimeDesc = 'startDateTime_DESC'
}

export type BlockNumberPreviousValues = {
  __typename?: 'BlockNumberPreviousValues';
  authoredBy: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  number: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
};

export type BlockNumberSubscriptionPayload = {
  __typename?: 'BlockNumberSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BlockNumber>;
  previousValues?: Maybe<BlockNumberPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BlockNumberSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BlockNumberWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BlockNumberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockNumberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockNumberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockNumberWhereInput>>;
  authoredBy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  authoredBy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authoredBy_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  authoredBy_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  authoredBy_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authoredBy_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  authoredBy_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  authoredBy_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authoredBy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authoredBy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  authoredBy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  authoredBy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authoredBy_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  number_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  number_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  number_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  number_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  number_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  number_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startDateTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startDateTime_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startDateTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startDateTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startDateTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type BlockNumberWhereUniqueInput = {
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Bounty = {
  __typename?: 'Bounty';
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  bountyStatus?: Maybe<Array<BountyStatus>>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  proposer: Scalars['String'];
  value: Scalars['String'];
};


export type BountyBountyStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyStatusWhereInput>;
};

/** A connection to a list of items. */
export type BountyConnection = {
  __typename?: 'BountyConnection';
  aggregate: AggregateBounty;
  /** A list of edges. */
  edges: Array<Maybe<BountyEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BountyEdge = {
  __typename?: 'BountyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Bounty;
};

export enum BountyOrderByInput {
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC',
  BondAsc = 'bond_ASC',
  BondDesc = 'bond_DESC',
  BountyIdAsc = 'bountyId_ASC',
  BountyIdDesc = 'bountyId_DESC',
  CuratorDepositAsc = 'curatorDeposit_ASC',
  CuratorDepositDesc = 'curatorDeposit_DESC',
  CuratorAsc = 'curator_ASC',
  CuratorDesc = 'curator_DESC',
  FeeAsc = 'fee_ASC',
  FeeDesc = 'fee_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type BountyPreviousValues = {
  __typename?: 'BountyPreviousValues';
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  proposer: Scalars['String'];
  value: Scalars['String'];
};

export type BountyStatus = Node & {
  __typename?: 'BountyStatus';
  blockNumber: BlockNumber;
  bounty: Bounty;
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type BountyStatusConnection = {
  __typename?: 'BountyStatusConnection';
  aggregate: AggregateBountyStatus;
  /** A list of edges. */
  edges: Array<Maybe<BountyStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BountyStatusEdge = {
  __typename?: 'BountyStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BountyStatus;
};

export enum BountyStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type BountyStatusPreviousValues = {
  __typename?: 'BountyStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type BountyStatusSubscriptionPayload = {
  __typename?: 'BountyStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BountyStatus>;
  previousValues?: Maybe<BountyStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BountyStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BountyStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BountyStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  bounty?: Maybe<BountyWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type BountyStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type BountySubscriptionPayload = {
  __typename?: 'BountySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Bounty>;
  previousValues?: Maybe<BountyPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BountySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BountyWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BountyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  bountyId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bountyId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bountyId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  bountyId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bountyId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  bountyId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  bountyId_not_in?: Maybe<Array<Scalars['Int']>>;
  bountyStatus_every?: Maybe<BountyStatusWhereInput>;
  bountyStatus_none?: Maybe<BountyStatusWhereInput>;
  bountyStatus_some?: Maybe<BountyStatusWhereInput>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curatorDeposit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curatorDeposit_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curatorDeposit_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curatorDeposit_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curatorDeposit_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curatorDeposit_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curatorDeposit_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curatorDeposit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curatorDeposit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curatorDeposit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curatorDeposit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curatorDeposit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curatorDeposit_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curator_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curator_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curator_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curator_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curator_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curator_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curator_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curator_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curator_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curator_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curator_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curator_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curator_starts_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fee_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type BountyWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Bounty = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bountyId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bountyId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bountyId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  bountyId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bountyId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  bountyId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  bountyId_not_in?: Maybe<Array<Scalars['Int']>>;
  bountyStatus_every?: Maybe<BountyStatusWhereInput>;
  bountyStatus_none?: Maybe<BountyStatusWhereInput>;
  bountyStatus_some?: Maybe<BountyStatusWhereInput>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curatorDeposit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curatorDeposit_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curatorDeposit_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curatorDeposit_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curatorDeposit_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curatorDeposit_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curatorDeposit_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curatorDeposit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curatorDeposit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curatorDeposit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curatorDeposit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curatorDeposit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curatorDeposit_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curator_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curator_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curator_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curator_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curator_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curator_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curator_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curator_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curator_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curator_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curator_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curator_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curator_starts_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fee_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type BountyWhereUniqueInput = {
  bountyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChangeResponse = {
  __typename?: 'ChangeResponse';
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Council = Node & {
  __typename?: 'Council';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  members?: Maybe<Array<CouncilMember>>;
};


export type CouncilMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};

/** A connection to a list of items. */
export type CouncilConnection = {
  __typename?: 'CouncilConnection';
  aggregate: AggregateCouncil;
  /** A list of edges. */
  edges: Array<Maybe<CouncilEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CouncilEdge = {
  __typename?: 'CouncilEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Council;
};

export type CouncilMember = Node & {
  __typename?: 'CouncilMember';
  address: Scalars['String'];
  councils?: Maybe<Array<Council>>;
  id: Scalars['ID'];
};


export type CouncilMemberCouncilsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};

/** A connection to a list of items. */
export type CouncilMemberConnection = {
  __typename?: 'CouncilMemberConnection';
  aggregate: AggregateCouncilMember;
  /** A list of edges. */
  edges: Array<Maybe<CouncilMemberEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CouncilMemberEdge = {
  __typename?: 'CouncilMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CouncilMember;
};

export enum CouncilMemberOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilMemberPreviousValues = {
  __typename?: 'CouncilMemberPreviousValues';
  address: Scalars['String'];
  id: Scalars['ID'];
};

export type CouncilMemberSubscriptionPayload = {
  __typename?: 'CouncilMemberSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<CouncilMember>;
  previousValues?: Maybe<CouncilMemberPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type CouncilMemberSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<CouncilMemberWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type CouncilMemberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberWhereInput>>;
  address?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  councils_every?: Maybe<CouncilWhereInput>;
  councils_none?: Maybe<CouncilWhereInput>;
  councils_some?: Maybe<CouncilWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
};

export type CouncilMemberWhereUniqueInput = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export enum CouncilOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilPreviousValues = {
  __typename?: 'CouncilPreviousValues';
  id: Scalars['ID'];
};

export type CouncilSubscriptionPayload = {
  __typename?: 'CouncilSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Council>;
  previousValues?: Maybe<CouncilPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type CouncilSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<CouncilWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type CouncilWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  members_every?: Maybe<CouncilMemberWhereInput>;
  members_none?: Maybe<CouncilMemberWhereInput>;
  members_some?: Maybe<CouncilMemberWhereInput>;
};

export type CouncilWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Era = Node & {
  __typename?: 'Era';
  eraStartSessionIndex: Session;
  id: Scalars['ID'];
  index: Scalars['Int'];
  individualPoints: Array<Scalars['String']>;
  totalPoints: Scalars['String'];
};

/** A connection to a list of items. */
export type EraConnection = {
  __typename?: 'EraConnection';
  aggregate: AggregateEra;
  /** A list of edges. */
  edges: Array<Maybe<EraEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EraEdge = {
  __typename?: 'EraEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Era;
};

export enum EraOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  TotalPointsAsc = 'totalPoints_ASC',
  TotalPointsDesc = 'totalPoints_DESC'
}

export type EraPreviousValues = {
  __typename?: 'EraPreviousValues';
  id: Scalars['ID'];
  index: Scalars['Int'];
  individualPoints: Array<Scalars['String']>;
  totalPoints: Scalars['String'];
};

export type EraSubscriptionPayload = {
  __typename?: 'EraSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Era>;
  previousValues?: Maybe<EraPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type EraSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<EraWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type EraWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EraWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EraWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EraWhereInput>>;
  eraStartSessionIndex?: Maybe<SessionWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  totalPoints?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  totalPoints_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  totalPoints_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  totalPoints_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  totalPoints_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  totalPoints_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  totalPoints_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  totalPoints_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  totalPoints_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  totalPoints_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  totalPoints_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  totalPoints_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  totalPoints_starts_with?: Maybe<Scalars['String']>;
};

export type EraWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
};

export type HeartBeat = Node & {
  __typename?: 'HeartBeat';
  authorityId: Scalars['String'];
  id: Scalars['ID'];
  sessionIndex: Session;
};

/** A connection to a list of items. */
export type HeartBeatConnection = {
  __typename?: 'HeartBeatConnection';
  aggregate: AggregateHeartBeat;
  /** A list of edges. */
  edges: Array<Maybe<HeartBeatEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HeartBeatEdge = {
  __typename?: 'HeartBeatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HeartBeat;
};

export enum HeartBeatOrderByInput {
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeartBeatPreviousValues = {
  __typename?: 'HeartBeatPreviousValues';
  authorityId: Scalars['String'];
  id: Scalars['ID'];
};

export type HeartBeatSubscriptionPayload = {
  __typename?: 'HeartBeatSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<HeartBeat>;
  previousValues?: Maybe<HeartBeatPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type HeartBeatSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<HeartBeatWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type HeartBeatWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeartBeatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeartBeatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeartBeatWhereInput>>;
  authorityId?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  authorityId_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authorityId_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  authorityId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  authorityId_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authorityId_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  authorityId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  authorityId_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authorityId_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authorityId_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  authorityId_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  authorityId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  authorityId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authorityId_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  sessionIndex?: Maybe<SessionWhereInput>;
};

export type HeartBeatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

export type Motion = {
  __typename?: 'Motion';
  author: Scalars['String'];
  id: Scalars['Int'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<Array<MotionProposalArgument>>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<Array<MotionStatus>>;
  preimage?: Maybe<Preimage>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
};


export type MotionMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


export type MotionMotionStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};

/** A connection to a list of items. */
export type MotionConnection = {
  __typename?: 'MotionConnection';
  aggregate: AggregateMotion;
  /** A list of edges. */
  edges: Array<Maybe<MotionEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MotionEdge = {
  __typename?: 'MotionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Motion;
};

export enum MotionOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberCountAsc = 'memberCount_ASC',
  MemberCountDesc = 'memberCount_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  MotionProposalHashAsc = 'motionProposalHash_ASC',
  MotionProposalHashDesc = 'motionProposalHash_DESC',
  MotionProposalIdAsc = 'motionProposalId_ASC',
  MotionProposalIdDesc = 'motionProposalId_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type MotionPreviousValues = {
  __typename?: 'MotionPreviousValues';
  author: Scalars['String'];
  id: Scalars['Int'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
};

export type MotionProposalArgument = Node & {
  __typename?: 'MotionProposalArgument';
  id: Scalars['ID'];
  motion: Motion;
  name: Scalars['String'];
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type MotionProposalArgumentConnection = {
  __typename?: 'MotionProposalArgumentConnection';
  aggregate: AggregateMotionProposalArgument;
  /** A list of edges. */
  edges: Array<Maybe<MotionProposalArgumentEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MotionProposalArgumentEdge = {
  __typename?: 'MotionProposalArgumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MotionProposalArgument;
};

export enum MotionProposalArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type MotionProposalArgumentPreviousValues = {
  __typename?: 'MotionProposalArgumentPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type MotionProposalArgumentSubscriptionPayload = {
  __typename?: 'MotionProposalArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<MotionProposalArgument>;
  previousValues?: Maybe<MotionProposalArgumentPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionProposalArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionProposalArgumentWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionProposalArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  motion?: Maybe<MotionWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MotionStatus = Node & {
  __typename?: 'MotionStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  motion: Motion;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type MotionStatusConnection = {
  __typename?: 'MotionStatusConnection';
  aggregate: AggregateMotionStatus;
  /** A list of edges. */
  edges: Array<Maybe<MotionStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MotionStatusEdge = {
  __typename?: 'MotionStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MotionStatus;
};

export enum MotionStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type MotionStatusPreviousValues = {
  __typename?: 'MotionStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type MotionStatusSubscriptionPayload = {
  __typename?: 'MotionStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<MotionStatus>;
  previousValues?: Maybe<MotionStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  motion?: Maybe<MotionWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type MotionSubscriptionPayload = {
  __typename?: 'MotionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Motion>;
  previousValues?: Maybe<MotionPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  motionProposalHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  motionProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  motionProposalHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  motionProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type MotionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  motionProposalId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addressLinkConfirm?: Maybe<ChangeResponse>;
  addressLinkStart?: Maybe<AddressLinkType>;
  addressLogin?: Maybe<LoginResponse>;
  addressLoginStart?: Maybe<AddressLoginType>;
  addressSignupConfirm?: Maybe<LoginResponse>;
  addressSignupStart?: Maybe<AddressLoginType>;
  addressUnlink?: Maybe<ChangeResponse>;
  changeAbout?: Maybe<Message>;
  changeEmail?: Maybe<ChangeResponse>;
  changeNotificationPreference?: Maybe<ChangeResponse>;
  changePassword?: Maybe<Message>;
  changeUsername?: Maybe<ChangeResponse>;
  createPostConfirm?: Maybe<Message>;
  createPostStart?: Maybe<AddressLoginType>;
  deleteAccount?: Maybe<Message>;
  editPostConfirm?: Maybe<Message>;
  editPostStart?: Maybe<AddressLoginType>;
  login?: Maybe<LoginResponse>;
  logout?: Maybe<Message>;
  multisigLinkConfirm?: Maybe<ChangeResponse>;
  multisigLinkStart?: Maybe<AddressLoginType>;
  postSubscribe?: Maybe<Message>;
  postUnsubscribe?: Maybe<Message>;
  reportContent?: Maybe<Message>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmailToken?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  setCredentialsConfirm?: Maybe<ChangeResponse>;
  setCredentialsStart?: Maybe<AddressLoginType>;
  setDefaultAddress?: Maybe<ChangeResponse>;
  signup?: Maybe<LoginResponse>;
  undoEmailChange?: Maybe<UndoEmailChangeResponse>;
  verifyEmail?: Maybe<ChangeResponse>;
};


export type MutationAddressLinkConfirmArgs = {
  address_id: Scalars['Int'];
  signature: Scalars['String'];
};


export type MutationAddressLinkStartArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


export type MutationAddressLoginArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationAddressLoginStartArgs = {
  address: Scalars['String'];
};


export type MutationAddressSignupConfirmArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationAddressSignupStartArgs = {
  address: Scalars['String'];
};


export type MutationAddressUnlinkArgs = {
  address: Scalars['String'];
};


export type MutationChangeAboutArgs = {
  address: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  signature: Scalars['String'];
  title: Scalars['String'];
};


export type MutationChangeEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationChangeUsernameArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreatePostConfirmArgs = {
  address: Scalars['String'];
  content: Scalars['String'];
  network: Scalars['String'];
  signature: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreatePostStartArgs = {
  address: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationEditPostConfirmArgs = {
  address: Scalars['String'];
  content: Scalars['String'];
  network: Scalars['String'];
  proposalId: Scalars['String'];
  proposalType: Scalars['String'];
  signature: Scalars['String'];
  title: Scalars['String'];
};


export type MutationEditPostStartArgs = {
  address: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationMultisigLinkConfirmArgs = {
  address: Scalars['String'];
  addresses: Scalars['String'];
  network: Scalars['String'];
  signatory: Scalars['String'];
  signature: Scalars['String'];
  ss58Prefix: Scalars['Int'];
  threshold: Scalars['Int'];
};


export type MutationMultisigLinkStartArgs = {
  address: Scalars['String'];
};


export type MutationPostSubscribeArgs = {
  post_id: Scalars['Int'];
};


export type MutationPostUnsubscribeArgs = {
  post_id: Scalars['Int'];
};


export type MutationReportContentArgs = {
  comments?: Maybe<Scalars['String']>;
  content_id: Scalars['String'];
  network: Scalars['String'];
  reason: Scalars['String'];
  type: Scalars['String'];
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationSetCredentialsConfirmArgs = {
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  signature: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSetCredentialsStartArgs = {
  address: Scalars['String'];
};


export type MutationSetDefaultAddressArgs = {
  address: Scalars['String'];
};


export type MutationSignupArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUndoEmailChangeArgs = {
  token: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Nomination = Node & {
  __typename?: 'Nomination';
  id: Scalars['ID'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  session: Session;
  stakedAmount: Scalars['String'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
};

/** A connection to a list of items. */
export type NominationConnection = {
  __typename?: 'NominationConnection';
  aggregate: AggregateNomination;
  /** A list of edges. */
  edges: Array<Maybe<NominationEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NominationEdge = {
  __typename?: 'NominationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Nomination;
};

export enum NominationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NominatorControllerAsc = 'nominatorController_ASC',
  NominatorControllerDesc = 'nominatorController_DESC',
  NominatorStashAsc = 'nominatorStash_ASC',
  NominatorStashDesc = 'nominatorStash_DESC',
  StakedAmountAsc = 'stakedAmount_ASC',
  StakedAmountDesc = 'stakedAmount_DESC',
  ValidatorControllerAsc = 'validatorController_ASC',
  ValidatorControllerDesc = 'validatorController_DESC',
  ValidatorStashAsc = 'validatorStash_ASC',
  ValidatorStashDesc = 'validatorStash_DESC'
}

export type NominationPreviousValues = {
  __typename?: 'NominationPreviousValues';
  id: Scalars['ID'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  stakedAmount: Scalars['String'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
};

export type NominationSubscriptionPayload = {
  __typename?: 'NominationSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Nomination>;
  previousValues?: Maybe<NominationPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type NominationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<NominationWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type NominationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NominationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NominationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NominationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  nominatorController?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nominatorController_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nominatorController_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nominatorController_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nominatorController_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nominatorController_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nominatorController_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nominatorController_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nominatorController_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nominatorController_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nominatorController_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nominatorController_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nominatorController_starts_with?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nominatorStash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nominatorStash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nominatorStash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nominatorStash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nominatorStash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nominatorStash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nominatorStash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nominatorStash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nominatorStash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nominatorStash_starts_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
  stakedAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stakedAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stakedAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stakedAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stakedAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stakedAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stakedAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stakedAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stakedAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stakedAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stakedAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stakedAmount_starts_with?: Maybe<Scalars['String']>;
  validatorController?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorController_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorController_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorController_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorController_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorController_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorController_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorController_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorController_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorController_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorController_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorController_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorController_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorController_starts_with?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorStash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorStash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorStash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorStash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorStash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorStash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorStash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorStash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorStash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorStash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorStash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorStash_starts_with?: Maybe<Scalars['String']>;
};

export type NominationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type NotificationPreferences = {
  __typename?: 'NotificationPreferences';
  newProposal?: Maybe<Scalars['Boolean']>;
  ownProposal?: Maybe<Scalars['Boolean']>;
  postCreated?: Maybe<Scalars['Boolean']>;
  postParticipated?: Maybe<Scalars['Boolean']>;
};

export type NotificationPreferencesInput = {
  newProposal?: Maybe<Scalars['Boolean']>;
  ownProposal?: Maybe<Scalars['Boolean']>;
  postCreated?: Maybe<Scalars['Boolean']>;
  postParticipated?: Maybe<Scalars['Boolean']>;
};

export type OfflineValidator = Node & {
  __typename?: 'OfflineValidator';
  id: Scalars['ID'];
  others: Array<Scalars['Json']>;
  own: Scalars['String'];
  sessionIndex: Session;
  total: Scalars['String'];
  validatorId: Scalars['String'];
};

/** A connection to a list of items. */
export type OfflineValidatorConnection = {
  __typename?: 'OfflineValidatorConnection';
  aggregate: AggregateOfflineValidator;
  /** A list of edges. */
  edges: Array<Maybe<OfflineValidatorEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OfflineValidatorEdge = {
  __typename?: 'OfflineValidatorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OfflineValidator;
};

export enum OfflineValidatorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OwnAsc = 'own_ASC',
  OwnDesc = 'own_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  ValidatorIdAsc = 'validatorId_ASC',
  ValidatorIdDesc = 'validatorId_DESC'
}

export type OfflineValidatorPreviousValues = {
  __typename?: 'OfflineValidatorPreviousValues';
  id: Scalars['ID'];
  others: Array<Scalars['Json']>;
  own: Scalars['String'];
  total: Scalars['String'];
  validatorId: Scalars['String'];
};

export type OfflineValidatorSubscriptionPayload = {
  __typename?: 'OfflineValidatorSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<OfflineValidator>;
  previousValues?: Maybe<OfflineValidatorPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type OfflineValidatorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<OfflineValidatorWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type OfflineValidatorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OfflineValidatorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OfflineValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  own?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  own_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  own_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  own_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  own_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  own_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  own_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  own_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  own_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  own_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  own_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  own_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  own_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  own_starts_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
  total?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  total_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  total_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  total_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  total_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  total_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  total_starts_with?: Maybe<Scalars['String']>;
  validatorId?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorId_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorId_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorId_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorId_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorId_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorId_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorId_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorId_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorId_starts_with?: Maybe<Scalars['String']>;
};

export type OfflineValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Preimage = Node & {
  __typename?: 'Preimage';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<Motion>;
  preimageArguments?: Maybe<Array<PreimageArgument>>;
  preimageStatus?: Maybe<Array<PreimageStatus>>;
  proposal?: Maybe<Proposal>;
  referendum?: Maybe<Referendum>;
  section: Scalars['String'];
};


export type PreimagePreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


export type PreimagePreimageStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
};

export type PreimageArgument = Node & {
  __typename?: 'PreimageArgument';
  id: Scalars['ID'];
  name: Scalars['String'];
  preimage: Preimage;
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type PreimageArgumentConnection = {
  __typename?: 'PreimageArgumentConnection';
  aggregate: AggregatePreimageArgument;
  /** A list of edges. */
  edges: Array<Maybe<PreimageArgumentEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PreimageArgumentEdge = {
  __typename?: 'PreimageArgumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PreimageArgument;
};

export enum PreimageArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type PreimageArgumentPreviousValues = {
  __typename?: 'PreimageArgumentPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PreimageArgumentSubscriptionPayload = {
  __typename?: 'PreimageArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PreimageArgument>;
  previousValues?: Maybe<PreimageArgumentPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type PreimageArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<PreimageArgumentWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type PreimageArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type PreimageConnection = {
  __typename?: 'PreimageConnection';
  aggregate: AggregatePreimage;
  /** A list of edges. */
  edges: Array<Maybe<PreimageEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PreimageEdge = {
  __typename?: 'PreimageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Preimage;
};

export enum PreimageOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type PreimagePreviousValues = {
  __typename?: 'PreimagePreviousValues';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
};

export type PreimageStatus = Node & {
  __typename?: 'PreimageStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  preimage: Preimage;
  status: Scalars['String'];
};

/** A connection to a list of items. */
export type PreimageStatusConnection = {
  __typename?: 'PreimageStatusConnection';
  aggregate: AggregatePreimageStatus;
  /** A list of edges. */
  edges: Array<Maybe<PreimageStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PreimageStatusEdge = {
  __typename?: 'PreimageStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PreimageStatus;
};

export enum PreimageStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type PreimageStatusPreviousValues = {
  __typename?: 'PreimageStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type PreimageStatusSubscriptionPayload = {
  __typename?: 'PreimageStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PreimageStatus>;
  previousValues?: Maybe<PreimageStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type PreimageStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<PreimageStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type PreimageStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  preimage?: Maybe<PreimageWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PreimageSubscriptionPayload = {
  __typename?: 'PreimageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Preimage>;
  previousValues?: Maybe<PreimagePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type PreimageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<PreimageWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type PreimageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionWhereInput>;
  preimageArguments_every?: Maybe<PreimageArgumentWhereInput>;
  preimageArguments_none?: Maybe<PreimageArgumentWhereInput>;
  preimageArguments_some?: Maybe<PreimageArgumentWhereInput>;
  preimageStatus_every?: Maybe<PreimageStatusWhereInput>;
  preimageStatus_none?: Maybe<PreimageStatusWhereInput>;
  preimageStatus_some?: Maybe<PreimageStatusWhereInput>;
  proposal?: Maybe<ProposalWhereInput>;
  referendum?: Maybe<ReferendumWhereInput>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Proposal = {
  __typename?: 'Proposal';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  id: Scalars['Int'];
  preimage?: Maybe<Preimage>;
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  proposalStatus?: Maybe<Array<ProposalStatus>>;
};


export type ProposalProposalStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};

/** A connection to a list of items. */
export type ProposalConnection = {
  __typename?: 'ProposalConnection';
  aggregate: AggregateProposal;
  /** A list of edges. */
  edges: Array<Maybe<ProposalEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProposalEdge = {
  __typename?: 'ProposalEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Proposal;
};

export enum ProposalOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ProposalIdAsc = 'proposalId_ASC',
  ProposalIdDesc = 'proposalId_DESC'
}

export type ProposalPreviousValues = {
  __typename?: 'ProposalPreviousValues';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  id: Scalars['Int'];
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
};

export type ProposalStatus = Node & {
  __typename?: 'ProposalStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  proposal: Proposal;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type ProposalStatusConnection = {
  __typename?: 'ProposalStatusConnection';
  aggregate: AggregateProposalStatus;
  /** A list of edges. */
  edges: Array<Maybe<ProposalStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProposalStatusEdge = {
  __typename?: 'ProposalStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProposalStatus;
};

export enum ProposalStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type ProposalStatusPreviousValues = {
  __typename?: 'ProposalStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type ProposalStatusSubscriptionPayload = {
  __typename?: 'ProposalStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ProposalStatus>;
  previousValues?: Maybe<ProposalStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ProposalStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ProposalStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ProposalStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  proposal?: Maybe<ProposalWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ProposalSubscriptionPayload = {
  __typename?: 'ProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Proposal>;
  previousValues?: Maybe<ProposalPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ProposalWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type PublicUser = {
  __typename?: 'PublicUser';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  profile?: Maybe<User>;
  subscription?: Maybe<Subscription>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
};


export type QueryAboutArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


export type QueryProfileArgs = {
  username: Scalars['String'];
};


export type QuerySubscriptionArgs = {
  post_id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Referendum = {
  __typename?: 'Referendum';
  delay: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['Int'];
  preimage?: Maybe<Preimage>;
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  referendumStatus?: Maybe<Array<ReferendumStatus>>;
  voteThreshold: Scalars['String'];
};


export type ReferendumReferendumStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};

/** A connection to a list of items. */
export type ReferendumConnection = {
  __typename?: 'ReferendumConnection';
  aggregate: AggregateReferendum;
  /** A list of edges. */
  edges: Array<Maybe<ReferendumEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReferendumEdge = {
  __typename?: 'ReferendumEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Referendum;
};

export enum ReferendumOrderByInput {
  DelayAsc = 'delay_ASC',
  DelayDesc = 'delay_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ReferendumIdAsc = 'referendumId_ASC',
  ReferendumIdDesc = 'referendumId_DESC',
  VoteThresholdAsc = 'voteThreshold_ASC',
  VoteThresholdDesc = 'voteThreshold_DESC'
}

export type ReferendumPreviousValues = {
  __typename?: 'ReferendumPreviousValues';
  delay: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
};

export type ReferendumStatus = Node & {
  __typename?: 'ReferendumStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  referendum: Referendum;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type ReferendumStatusConnection = {
  __typename?: 'ReferendumStatusConnection';
  aggregate: AggregateReferendumStatus;
  /** A list of edges. */
  edges: Array<Maybe<ReferendumStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReferendumStatusEdge = {
  __typename?: 'ReferendumStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ReferendumStatus;
};

export enum ReferendumStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type ReferendumStatusPreviousValues = {
  __typename?: 'ReferendumStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type ReferendumStatusSubscriptionPayload = {
  __typename?: 'ReferendumStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ReferendumStatus>;
  previousValues?: Maybe<ReferendumStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ReferendumStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  referendum?: Maybe<ReferendumWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ReferendumSubscriptionPayload = {
  __typename?: 'ReferendumSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Referendum>;
  previousValues?: Maybe<ReferendumPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ReferendumWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumWhereInput>>;
  delay?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  delay_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  delay_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  delay_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  delay_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  delay_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  delay_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  end?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  referendumId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  referendumId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  referendumId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  referendumId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  referendumId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  voteThreshold?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  voteThreshold_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  voteThreshold_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  voteThreshold_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  voteThreshold_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  voteThreshold_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  voteThreshold_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumWhereInput>>;
  delay?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  delay_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  delay_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  delay_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  delay_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  delay_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  delay_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  end?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  referendumId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  referendumId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  referendumId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  referendumId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  referendumId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  voteThreshold?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  voteThreshold_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  voteThreshold_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  voteThreshold_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  voteThreshold_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  voteThreshold_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  voteThreshold_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

export type Reward = Node & {
  __typename?: 'Reward';
  authoredBlock: BlockNumber;
  id: Scalars['ID'];
  sessionIndex: Session;
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
};

/** A connection to a list of items. */
export type RewardConnection = {
  __typename?: 'RewardConnection';
  aggregate: AggregateReward;
  /** A list of edges. */
  edges: Array<Maybe<RewardEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RewardEdge = {
  __typename?: 'RewardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Reward;
};

export enum RewardOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TreasuryRewardAsc = 'treasuryReward_ASC',
  TreasuryRewardDesc = 'treasuryReward_DESC',
  ValidatorRewardAsc = 'validatorReward_ASC',
  ValidatorRewardDesc = 'validatorReward_DESC'
}

export type RewardPreviousValues = {
  __typename?: 'RewardPreviousValues';
  id: Scalars['ID'];
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
};

export type RewardSubscriptionPayload = {
  __typename?: 'RewardSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Reward>;
  previousValues?: Maybe<RewardPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type RewardSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<RewardWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type RewardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RewardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RewardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RewardWhereInput>>;
  authoredBlock?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  sessionIndex?: Maybe<SessionWhereInput>;
  treasuryReward?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  treasuryReward_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  treasuryReward_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  treasuryReward_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  treasuryReward_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  treasuryReward_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  treasuryReward_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  treasuryReward_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  treasuryReward_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  treasuryReward_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  treasuryReward_starts_with?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorReward_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorReward_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorReward_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorReward_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorReward_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorReward_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorReward_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorReward_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorReward_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorReward_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorReward_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorReward_starts_with?: Maybe<Scalars['String']>;
};

export type RewardWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Session = Node & {
  __typename?: 'Session';
  id: Scalars['ID'];
  index: Scalars['Int'];
  start: BlockNumber;
};

/** A connection to a list of items. */
export type SessionConnection = {
  __typename?: 'SessionConnection';
  aggregate: AggregateSession;
  /** A list of edges. */
  edges: Array<Maybe<SessionEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SessionEdge = {
  __typename?: 'SessionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Session;
};

export enum SessionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type SessionPreviousValues = {
  __typename?: 'SessionPreviousValues';
  id: Scalars['ID'];
  index: Scalars['Int'];
};

export type SessionSubscriptionPayload = {
  __typename?: 'SessionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Session>;
  previousValues?: Maybe<SessionPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type SessionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<SessionWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type SessionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SessionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  start?: Maybe<BlockNumberWhereInput>;
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
};

export type Slashing = Node & {
  __typename?: 'Slashing';
  amount: Scalars['String'];
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  who: Scalars['String'];
};

/** A connection to a list of items. */
export type SlashingConnection = {
  __typename?: 'SlashingConnection';
  aggregate: AggregateSlashing;
  /** A list of edges. */
  edges: Array<Maybe<SlashingEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SlashingEdge = {
  __typename?: 'SlashingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Slashing;
};

export enum SlashingOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC'
}

export type SlashingPreviousValues = {
  __typename?: 'SlashingPreviousValues';
  amount: Scalars['String'];
  id: Scalars['ID'];
  who: Scalars['String'];
};

export type SlashingSubscriptionPayload = {
  __typename?: 'SlashingSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Slashing>;
  previousValues?: Maybe<SlashingPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type SlashingSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<SlashingWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type SlashingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SlashingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SlashingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SlashingWhereInput>>;
  amount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  amount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  amount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  amount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  amount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  amount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  amount_starts_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
};

export type SlashingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
};

export type Stake = Node & {
  __typename?: 'Stake';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  totalStake: Scalars['String'];
};

/** A connection to a list of items. */
export type StakeConnection = {
  __typename?: 'StakeConnection';
  aggregate: AggregateStake;
  /** A list of edges. */
  edges: Array<Maybe<StakeEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StakeEdge = {
  __typename?: 'StakeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Stake;
};

export enum StakeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalStakeAsc = 'totalStake_ASC',
  TotalStakeDesc = 'totalStake_DESC'
}

export type StakePreviousValues = {
  __typename?: 'StakePreviousValues';
  id: Scalars['ID'];
  totalStake: Scalars['String'];
};

export type StakeSubscriptionPayload = {
  __typename?: 'StakeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Stake>;
  previousValues?: Maybe<StakePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type StakeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<StakeWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type StakeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StakeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StakeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StakeWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  totalStake?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  totalStake_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  totalStake_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  totalStake_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  totalStake_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  totalStake_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  totalStake_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  totalStake_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  totalStake_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  totalStake_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  totalStake_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  totalStake_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  totalStake_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  totalStake_starts_with?: Maybe<Scalars['String']>;
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribed?: Maybe<Scalars['Boolean']>;
};

export type TechCommitteeProposal = {
  __typename?: 'TechCommitteeProposal';
  author: Scalars['String'];
  id: Scalars['Int'];
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  preimage?: Maybe<Preimage>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalArguments?: Maybe<Array<TechCommitteeProposalArgument>>;
  proposalHash: Scalars['String'];
  proposalId: Scalars['Int'];
  section?: Maybe<Scalars['String']>;
  status?: Maybe<Array<TechCommitteeProposalStatus>>;
};


export type TechCommitteeProposalProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalArgumentWhereInput>;
};


export type TechCommitteeProposalStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalStatusWhereInput>;
};

export type TechCommitteeProposalArgument = Node & {
  __typename?: 'TechCommitteeProposalArgument';
  id: Scalars['ID'];
  name: Scalars['String'];
  proposal: TechCommitteeProposal;
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type TechCommitteeProposalArgumentConnection = {
  __typename?: 'TechCommitteeProposalArgumentConnection';
  aggregate: AggregateTechCommitteeProposalArgument;
  /** A list of edges. */
  edges: Array<Maybe<TechCommitteeProposalArgumentEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TechCommitteeProposalArgumentEdge = {
  __typename?: 'TechCommitteeProposalArgumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TechCommitteeProposalArgument;
};

export enum TechCommitteeProposalArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TechCommitteeProposalArgumentPreviousValues = {
  __typename?: 'TechCommitteeProposalArgumentPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type TechCommitteeProposalArgumentSubscriptionPayload = {
  __typename?: 'TechCommitteeProposalArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TechCommitteeProposalArgument>;
  previousValues?: Maybe<TechCommitteeProposalArgumentPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TechCommitteeProposalArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TechCommitteeProposalArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  proposal?: Maybe<TechCommitteeProposalWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type TechCommitteeProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type TechCommitteeProposalConnection = {
  __typename?: 'TechCommitteeProposalConnection';
  aggregate: AggregateTechCommitteeProposal;
  /** A list of edges. */
  edges: Array<Maybe<TechCommitteeProposalEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TechCommitteeProposalEdge = {
  __typename?: 'TechCommitteeProposalEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TechCommitteeProposal;
};

export enum TechCommitteeProposalOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberCountAsc = 'memberCount_ASC',
  MemberCountDesc = 'memberCount_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ProposalHashAsc = 'proposalHash_ASC',
  ProposalHashDesc = 'proposalHash_DESC',
  ProposalIdAsc = 'proposalId_ASC',
  ProposalIdDesc = 'proposalId_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type TechCommitteeProposalPreviousValues = {
  __typename?: 'TechCommitteeProposalPreviousValues';
  author: Scalars['String'];
  id: Scalars['Int'];
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalHash: Scalars['String'];
  proposalId: Scalars['Int'];
  section?: Maybe<Scalars['String']>;
};

export type TechCommitteeProposalStatus = Node & {
  __typename?: 'TechCommitteeProposalStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  proposal: TechCommitteeProposal;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TechCommitteeProposalStatusConnection = {
  __typename?: 'TechCommitteeProposalStatusConnection';
  aggregate: AggregateTechCommitteeProposalStatus;
  /** A list of edges. */
  edges: Array<Maybe<TechCommitteeProposalStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TechCommitteeProposalStatusEdge = {
  __typename?: 'TechCommitteeProposalStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TechCommitteeProposalStatus;
};

export enum TechCommitteeProposalStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type TechCommitteeProposalStatusPreviousValues = {
  __typename?: 'TechCommitteeProposalStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type TechCommitteeProposalStatusSubscriptionPayload = {
  __typename?: 'TechCommitteeProposalStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TechCommitteeProposalStatus>;
  previousValues?: Maybe<TechCommitteeProposalStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TechCommitteeProposalStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TechCommitteeProposalStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TechCommitteeProposalStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  proposal?: Maybe<TechCommitteeProposalWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TechCommitteeProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TechCommitteeProposalSubscriptionPayload = {
  __typename?: 'TechCommitteeProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TechCommitteeProposal>;
  previousValues?: Maybe<TechCommitteeProposalPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TechCommitteeProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TechCommitteeProposalWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TechCommitteeProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  proposalArguments_every?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  proposalArguments_none?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  proposalArguments_some?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  proposalHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposalHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposalHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposalHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposalHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposalHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposalHash_starts_with?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  status_every?: Maybe<TechCommitteeProposalStatusWhereInput>;
  status_none?: Maybe<TechCommitteeProposalStatusWhereInput>;
  status_some?: Maybe<TechCommitteeProposalStatusWhereInput>;
};

export type TechCommitteeProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Tech_Committee_Proposal = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechCommitteeProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechCommitteeProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechCommitteeProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  proposalArguments_every?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  proposalArguments_none?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  proposalArguments_some?: Maybe<TechCommitteeProposalArgumentWhereInput>;
  proposalHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposalHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposalHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposalHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposalHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposalHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposalHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  status_every?: Maybe<TechCommitteeProposalStatusWhereInput>;
  status_none?: Maybe<TechCommitteeProposalStatusWhereInput>;
  status_some?: Maybe<TechCommitteeProposalStatusWhereInput>;
};

export type TechCommitteeProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type Tip = {
  __typename?: 'Tip';
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  reason: Scalars['String'];
  tipStatus?: Maybe<Array<TipStatus>>;
  who: Scalars['String'];
};


export type TipTipStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipStatusWhereInput>;
};

/** A connection to a list of items. */
export type TipConnection = {
  __typename?: 'TipConnection';
  aggregate: AggregateTip;
  /** A list of edges. */
  edges: Array<Maybe<TipEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TipEdge = {
  __typename?: 'TipEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Tip;
};

export enum TipOrderByInput {
  ClosesAsc = 'closes_ASC',
  ClosesDesc = 'closes_DESC',
  FinderFeeAsc = 'finderFee_ASC',
  FinderFeeDesc = 'finderFee_DESC',
  FinderAsc = 'finder_ASC',
  FinderDesc = 'finder_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReasonAsc = 'reason_ASC',
  ReasonDesc = 'reason_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC'
}

export type TipPreviousValues = {
  __typename?: 'TipPreviousValues';
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  reason: Scalars['String'];
  who: Scalars['String'];
};

export type TipStatus = Node & {
  __typename?: 'TipStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  status: Scalars['String'];
  tip: Tip;
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TipStatusConnection = {
  __typename?: 'TipStatusConnection';
  aggregate: AggregateTipStatus;
  /** A list of edges. */
  edges: Array<Maybe<TipStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TipStatusEdge = {
  __typename?: 'TipStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TipStatus;
};

export enum TipStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type TipStatusPreviousValues = {
  __typename?: 'TipStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type TipStatusSubscriptionPayload = {
  __typename?: 'TipStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TipStatus>;
  previousValues?: Maybe<TipStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TipStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TipStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TipStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  tip?: Maybe<TipWhereInput>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TipStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TipSubscriptionPayload = {
  __typename?: 'TipSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tip>;
  previousValues?: Maybe<TipPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TipSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TipWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TipWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipWhereInput>>;
  closes?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  closes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  closes_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  closes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  closes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  closes_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  closes_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  closes_not_in?: Maybe<Array<Scalars['Int']>>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finderFee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finderFee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finderFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finderFee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finderFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finderFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finderFee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finderFee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finderFee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finderFee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finderFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finderFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finderFee_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finder_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finder_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finder_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finder_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finder_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finder_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finder_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finder_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finder_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finder_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finder_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  reason?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  reason_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  reason_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  reason_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  reason_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  reason_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  reason_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  reason_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  reason_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  reason_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  reason_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  reason_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  reason_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  reason_starts_with?: Maybe<Scalars['String']>;
  tipStatus_every?: Maybe<TipStatusWhereInput>;
  tipStatus_none?: Maybe<TipStatusWhereInput>;
  tipStatus_some?: Maybe<TipStatusWhereInput>;
  who?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
};

export type TipWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Tip = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipWhereInput>>;
  closes?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  closes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  closes_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  closes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  closes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  closes_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  closes_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  closes_not_in?: Maybe<Array<Scalars['Int']>>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finderFee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finderFee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finderFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finderFee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finderFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finderFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finderFee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finderFee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finderFee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finderFee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finderFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finderFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finderFee_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finder_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finder_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finder_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finder_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finder_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finder_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finder_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finder_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finder_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finder_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finder_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  reason?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  reason_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  reason_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  reason_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  reason_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  reason_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  reason_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  reason_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  reason_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  reason_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  reason_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  reason_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  reason_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  reason_starts_with?: Maybe<Scalars['String']>;
  tipStatus_every?: Maybe<TipStatusWhereInput>;
  tipStatus_none?: Maybe<TipStatusWhereInput>;
  tipStatus_some?: Maybe<TipStatusWhereInput>;
  who?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
};

export type TipWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export type TotalIssuance = Node & {
  __typename?: 'TotalIssuance';
  amount: Scalars['String'];
  blockNumber: BlockNumber;
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type TotalIssuanceConnection = {
  __typename?: 'TotalIssuanceConnection';
  aggregate: AggregateTotalIssuance;
  /** A list of edges. */
  edges: Array<Maybe<TotalIssuanceEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TotalIssuanceEdge = {
  __typename?: 'TotalIssuanceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TotalIssuance;
};

export enum TotalIssuanceOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type TotalIssuancePreviousValues = {
  __typename?: 'TotalIssuancePreviousValues';
  amount: Scalars['String'];
  id: Scalars['ID'];
};

export type TotalIssuanceSubscriptionPayload = {
  __typename?: 'TotalIssuanceSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TotalIssuance>;
  previousValues?: Maybe<TotalIssuancePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TotalIssuanceSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TotalIssuanceWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TotalIssuanceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TotalIssuanceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TotalIssuanceWhereInput>>;
  amount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  amount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  amount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  amount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  amount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  amount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  amount_starts_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
};

export type TotalIssuanceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TreasurySpendProposal = {
  __typename?: 'TreasurySpendProposal';
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  id: Scalars['Int'];
  motion?: Maybe<Motion>;
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<Array<TreasuryStatus>>;
  value: Scalars['String'];
};


export type TreasurySpendProposalTreasuryStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};

/** A connection to a list of items. */
export type TreasurySpendProposalConnection = {
  __typename?: 'TreasurySpendProposalConnection';
  aggregate: AggregateTreasurySpendProposal;
  /** A list of edges. */
  edges: Array<Maybe<TreasurySpendProposalEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreasurySpendProposalEdge = {
  __typename?: 'TreasurySpendProposalEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TreasurySpendProposal;
};

export enum TreasurySpendProposalOrderByInput {
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC',
  BondAsc = 'bond_ASC',
  BondDesc = 'bond_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  TreasuryProposalIdAsc = 'treasuryProposalId_ASC',
  TreasuryProposalIdDesc = 'treasuryProposalId_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TreasurySpendProposalPreviousValues = {
  __typename?: 'TreasurySpendProposalPreviousValues';
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  id: Scalars['Int'];
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  value: Scalars['String'];
};

export type TreasurySpendProposalSubscriptionPayload = {
  __typename?: 'TreasurySpendProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TreasurySpendProposal>;
  previousValues?: Maybe<TreasurySpendProposalPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TreasurySpendProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TreasurySpendProposalWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TreasurySpendProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  motion?: Maybe<MotionWhereInput>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  motion?: Maybe<MotionWhereInput>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
};

export type TreasuryStatus = Node & {
  __typename?: 'TreasuryStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  status: Scalars['String'];
  treasurySpendProposal: TreasurySpendProposal;
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TreasuryStatusConnection = {
  __typename?: 'TreasuryStatusConnection';
  aggregate: AggregateTreasuryStatus;
  /** A list of edges. */
  edges: Array<Maybe<TreasuryStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreasuryStatusEdge = {
  __typename?: 'TreasuryStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TreasuryStatus;
};

export enum TreasuryStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type TreasuryStatusPreviousValues = {
  __typename?: 'TreasuryStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type TreasuryStatusSubscriptionPayload = {
  __typename?: 'TreasuryStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TreasuryStatus>;
  previousValues?: Maybe<TreasuryStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TreasuryStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TreasuryStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TreasuryStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type UndoEmailChangeResponse = {
  __typename?: 'UndoEmailChangeResponse';
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  kusama_default_address?: Maybe<Scalars['String']>;
  polkadot_default_address?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  web3signup?: Maybe<Scalars['Boolean']>;
};

export type Validator = Node & {
  __typename?: 'Validator';
  controller: Scalars['String'];
  id: Scalars['ID'];
  preferences: Scalars['String'];
  session: Session;
  stash: Scalars['String'];
};

/** A connection to a list of items. */
export type ValidatorConnection = {
  __typename?: 'ValidatorConnection';
  aggregate: AggregateValidator;
  /** A list of edges. */
  edges: Array<Maybe<ValidatorEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ValidatorEdge = {
  __typename?: 'ValidatorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Validator;
};

export enum ValidatorOrderByInput {
  ControllerAsc = 'controller_ASC',
  ControllerDesc = 'controller_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PreferencesAsc = 'preferences_ASC',
  PreferencesDesc = 'preferences_DESC',
  StashAsc = 'stash_ASC',
  StashDesc = 'stash_DESC'
}

export type ValidatorPreviousValues = {
  __typename?: 'ValidatorPreviousValues';
  controller: Scalars['String'];
  id: Scalars['ID'];
  preferences: Scalars['String'];
  stash: Scalars['String'];
};

export type ValidatorSubscriptionPayload = {
  __typename?: 'ValidatorSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Validator>;
  previousValues?: Maybe<ValidatorPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ValidatorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ValidatorWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ValidatorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ValidatorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ValidatorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ValidatorWhereInput>>;
  controller?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  controller_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  controller_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  controller_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  controller_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  controller_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  controller_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  controller_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  controller_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  controller_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  controller_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  controller_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  controller_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  controller_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  preferences?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preferences_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preferences_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preferences_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preferences_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preferences_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preferences_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preferences_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preferences_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preferences_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preferences_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preferences_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preferences_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preferences_starts_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
  stash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  stash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stash_starts_with?: Maybe<Scalars['String']>;
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** columns and relationships of "blockchain_socials" */
export type Blockchain_Socials = {
  __typename?: 'blockchain_socials';
  block_explorer?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  network: Scalars['String'];
  reddit?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** aggregated selection of "blockchain_socials" */
export type Blockchain_Socials_Aggregate = {
  __typename?: 'blockchain_socials_aggregate';
  aggregate?: Maybe<Blockchain_Socials_Aggregate_Fields>;
  nodes: Array<Blockchain_Socials>;
};

/** aggregate fields of "blockchain_socials" */
export type Blockchain_Socials_Aggregate_Fields = {
  __typename?: 'blockchain_socials_aggregate_fields';
  avg?: Maybe<Blockchain_Socials_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Blockchain_Socials_Max_Fields>;
  min?: Maybe<Blockchain_Socials_Min_Fields>;
  stddev?: Maybe<Blockchain_Socials_Stddev_Fields>;
  stddev_pop?: Maybe<Blockchain_Socials_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blockchain_Socials_Stddev_Samp_Fields>;
  sum?: Maybe<Blockchain_Socials_Sum_Fields>;
  var_pop?: Maybe<Blockchain_Socials_Var_Pop_Fields>;
  var_samp?: Maybe<Blockchain_Socials_Var_Samp_Fields>;
  variance?: Maybe<Blockchain_Socials_Variance_Fields>;
};


/** aggregate fields of "blockchain_socials" */
export type Blockchain_Socials_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Blockchain_Socials_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blockchain_socials" */
export type Blockchain_Socials_Aggregate_Order_By = {
  avg?: Maybe<Blockchain_Socials_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Blockchain_Socials_Max_Order_By>;
  min?: Maybe<Blockchain_Socials_Min_Order_By>;
  stddev?: Maybe<Blockchain_Socials_Stddev_Order_By>;
  stddev_pop?: Maybe<Blockchain_Socials_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Blockchain_Socials_Stddev_Samp_Order_By>;
  sum?: Maybe<Blockchain_Socials_Sum_Order_By>;
  var_pop?: Maybe<Blockchain_Socials_Var_Pop_Order_By>;
  var_samp?: Maybe<Blockchain_Socials_Var_Samp_Order_By>;
  variance?: Maybe<Blockchain_Socials_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blockchain_socials" */
export type Blockchain_Socials_Arr_Rel_Insert_Input = {
  data: Array<Blockchain_Socials_Insert_Input>;
  on_conflict?: Maybe<Blockchain_Socials_On_Conflict>;
};

/** aggregate avg on columns */
export type Blockchain_Socials_Avg_Fields = {
  __typename?: 'blockchain_socials_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blockchain_socials". All fields are combined with a logical 'AND'. */
export type Blockchain_Socials_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Blockchain_Socials_Bool_Exp>>>;
  _not?: Maybe<Blockchain_Socials_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Blockchain_Socials_Bool_Exp>>>;
  block_explorer?: Maybe<String_Comparison_Exp>;
  discord?: Maybe<String_Comparison_Exp>;
  github?: Maybe<String_Comparison_Exp>;
  homepage?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  network?: Maybe<String_Comparison_Exp>;
  reddit?: Maybe<String_Comparison_Exp>;
  telegram?: Maybe<String_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
  youtube?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "blockchain_socials" */
export enum Blockchain_Socials_Constraint {
  /** unique or primary key constraint */
  BlockchainSocialsPkey = 'blockchain_socials_pkey'
}

/** input type for incrementing integer column in table "blockchain_socials" */
export type Blockchain_Socials_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "blockchain_socials" */
export type Blockchain_Socials_Insert_Input = {
  block_explorer?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Blockchain_Socials_Max_Fields = {
  __typename?: 'blockchain_socials_max_fields';
  block_explorer?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Max_Order_By = {
  block_explorer?: Maybe<Order_By>;
  discord?: Maybe<Order_By>;
  github?: Maybe<Order_By>;
  homepage?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  network?: Maybe<Order_By>;
  reddit?: Maybe<Order_By>;
  telegram?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Blockchain_Socials_Min_Fields = {
  __typename?: 'blockchain_socials_min_fields';
  block_explorer?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Min_Order_By = {
  block_explorer?: Maybe<Order_By>;
  discord?: Maybe<Order_By>;
  github?: Maybe<Order_By>;
  homepage?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  network?: Maybe<Order_By>;
  reddit?: Maybe<Order_By>;
  telegram?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** response of any mutation on the table "blockchain_socials" */
export type Blockchain_Socials_Mutation_Response = {
  __typename?: 'blockchain_socials_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blockchain_Socials>;
};

/** input type for inserting object relation for remote table "blockchain_socials" */
export type Blockchain_Socials_Obj_Rel_Insert_Input = {
  data: Blockchain_Socials_Insert_Input;
  on_conflict?: Maybe<Blockchain_Socials_On_Conflict>;
};

/** on conflict condition type for table "blockchain_socials" */
export type Blockchain_Socials_On_Conflict = {
  constraint: Blockchain_Socials_Constraint;
  update_columns: Array<Blockchain_Socials_Update_Column>;
  where?: Maybe<Blockchain_Socials_Bool_Exp>;
};

/** ordering options when selecting data from "blockchain_socials" */
export type Blockchain_Socials_Order_By = {
  block_explorer?: Maybe<Order_By>;
  discord?: Maybe<Order_By>;
  github?: Maybe<Order_By>;
  homepage?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  network?: Maybe<Order_By>;
  reddit?: Maybe<Order_By>;
  telegram?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** primary key columns input for table: "blockchain_socials" */
export type Blockchain_Socials_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "blockchain_socials" */
export enum Blockchain_Socials_Select_Column {
  /** column name */
  BlockExplorer = 'block_explorer',
  /** column name */
  Discord = 'discord',
  /** column name */
  Github = 'github',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  Network = 'network',
  /** column name */
  Reddit = 'reddit',
  /** column name */
  Telegram = 'telegram',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Youtube = 'youtube'
}

/** input type for updating data in table "blockchain_socials" */
export type Blockchain_Socials_Set_Input = {
  block_explorer?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Blockchain_Socials_Stddev_Fields = {
  __typename?: 'blockchain_socials_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blockchain_Socials_Stddev_Pop_Fields = {
  __typename?: 'blockchain_socials_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blockchain_Socials_Stddev_Samp_Fields = {
  __typename?: 'blockchain_socials_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Blockchain_Socials_Sum_Fields = {
  __typename?: 'blockchain_socials_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "blockchain_socials" */
export enum Blockchain_Socials_Update_Column {
  /** column name */
  BlockExplorer = 'block_explorer',
  /** column name */
  Discord = 'discord',
  /** column name */
  Github = 'github',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  Network = 'network',
  /** column name */
  Reddit = 'reddit',
  /** column name */
  Telegram = 'telegram',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Youtube = 'youtube'
}

/** aggregate var_pop on columns */
export type Blockchain_Socials_Var_Pop_Fields = {
  __typename?: 'blockchain_socials_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blockchain_Socials_Var_Samp_Fields = {
  __typename?: 'blockchain_socials_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Blockchain_Socials_Variance_Fields = {
  __typename?: 'blockchain_socials_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blockchain_socials" */
export type Blockchain_Socials_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
};

/** columns and relationships of "comment_reactions" */
export type Comment_Reactions = {
  __typename?: 'comment_reactions';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** Remote relationship field */
  reacting_user?: Maybe<User>;
  reaction: Scalars['bpchar'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "comment_reactions" */
export type Comment_Reactions_Aggregate = {
  __typename?: 'comment_reactions_aggregate';
  aggregate?: Maybe<Comment_Reactions_Aggregate_Fields>;
  nodes: Array<Comment_Reactions>;
};

/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_Fields = {
  __typename?: 'comment_reactions_aggregate_fields';
  avg?: Maybe<Comment_Reactions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comment_Reactions_Max_Fields>;
  min?: Maybe<Comment_Reactions_Min_Fields>;
  stddev?: Maybe<Comment_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Reactions_Sum_Fields>;
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Comment_Reactions_Variance_Fields>;
};


/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment_reactions" */
export type Comment_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Comment_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Reactions_Max_Order_By>;
  min?: Maybe<Comment_Reactions_Min_Order_By>;
  stddev?: Maybe<Comment_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Comment_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Comment_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment_reactions" */
export type Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Reactions_Avg_Fields = {
  __typename?: 'comment_reactions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment_reactions" */
export type Comment_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment_reactions". All fields are combined with a logical 'AND'. */
export type Comment_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Reactions_Bool_Exp>>>;
  _not?: Maybe<Comment_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Reactions_Bool_Exp>>>;
  comment?: Maybe<Comments_Bool_Exp>;
  comment_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  reaction?: Maybe<Bpchar_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_reactions" */
export enum Comment_Reactions_Constraint {
  /** unique or primary key constraint */
  CommentReactionsCommentIdUserIdReactionKey = 'comment_reactions_comment_id_user_id_reaction_key',
  /** unique or primary key constraint */
  CommentReactionsPkey = 'comment_reactions_pkey'
}

/** input type for incrementing integer column in table "comment_reactions" */
export type Comment_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comment_reactions" */
export type Comment_Reactions_Insert_Input = {
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Comment_Reactions_Max_Fields = {
  __typename?: 'comment_reactions_max_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "comment_reactions" */
export type Comment_Reactions_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Reactions_Min_Fields = {
  __typename?: 'comment_reactions_min_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "comment_reactions" */
export type Comment_Reactions_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "comment_reactions" */
export type Comment_Reactions_Mutation_Response = {
  __typename?: 'comment_reactions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment_Reactions>;
};

/** input type for inserting object relation for remote table "comment_reactions" */
export type Comment_Reactions_Obj_Rel_Insert_Input = {
  data: Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};

/** on conflict condition type for table "comment_reactions" */
export type Comment_Reactions_On_Conflict = {
  constraint: Comment_Reactions_Constraint;
  update_columns: Array<Comment_Reactions_Update_Column>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};

/** ordering options when selecting data from "comment_reactions" */
export type Comment_Reactions_Order_By = {
  comment?: Maybe<Comments_Order_By>;
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "comment_reactions" */
export type Comment_Reactions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "comment_reactions" */
export enum Comment_Reactions_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comment_reactions" */
export type Comment_Reactions_Set_Input = {
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Comment_Reactions_Stddev_Fields = {
  __typename?: 'comment_reactions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Reactions_Stddev_Pop_Fields = {
  __typename?: 'comment_reactions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Reactions_Stddev_Samp_Fields = {
  __typename?: 'comment_reactions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Reactions_Sum_Fields = {
  __typename?: 'comment_reactions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comment_reactions" */
export type Comment_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "comment_reactions" */
export enum Comment_Reactions_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Comment_Reactions_Var_Pop_Fields = {
  __typename?: 'comment_reactions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment_reactions" */
export type Comment_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Reactions_Var_Samp_Fields = {
  __typename?: 'comment_reactions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment_reactions" */
export type Comment_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Reactions_Variance_Fields = {
  __typename?: 'comment_reactions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment_reactions" */
export type Comment_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** Remote relationship field */
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregated array relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An array relationship */
  replies: Array<Replies>;
  /** An aggregated array relationship */
  replies_aggregate: Replies_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "comments" */
export type CommentsComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replies_Order_By>>;
  where?: Maybe<Replies_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replies_Order_By>>;
  where?: Maybe<Replies_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
  stddev?: Maybe<Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Comments_Sum_Fields>;
  var_pop?: Maybe<Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Comments_Var_Samp_Fields>;
  variance?: Maybe<Comments_Variance_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: Maybe<Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
  stddev?: Maybe<Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Comments_Sum_Order_By>;
  var_pop?: Maybe<Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Comments_Var_Samp_Order_By>;
  variance?: Maybe<Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  comment_reactions?: Maybe<Comment_Reactions_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  replies?: Maybe<Replies_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for incrementing integer column in table "comments" */
export type Comments_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comment_reactions?: Maybe<Comment_Reactions_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  replies?: Maybe<Replies_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  author_id?: Maybe<Order_By>;
  comment_reactions_aggregate?: Maybe<Comment_Reactions_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  replies_aggregate?: Maybe<Replies_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  addressLinkConfirm?: Maybe<ChangeResponse>;
  addressLinkStart?: Maybe<AddressLinkType>;
  addressLogin?: Maybe<LoginResponse>;
  addressLoginStart?: Maybe<AddressLoginType>;
  addressSignupConfirm?: Maybe<LoginResponse>;
  addressSignupStart?: Maybe<AddressLoginType>;
  addressUnlink?: Maybe<ChangeResponse>;
  changeAbout?: Maybe<Message>;
  changeEmail?: Maybe<ChangeResponse>;
  changeNotificationPreference?: Maybe<ChangeResponse>;
  changePassword?: Maybe<Message>;
  changeUsername?: Maybe<ChangeResponse>;
  createPostConfirm?: Maybe<Message>;
  createPostStart?: Maybe<AddressLoginType>;
  deleteAccount?: Maybe<Message>;
  /** delete data from the table: "blockchain_socials" */
  delete_blockchain_socials?: Maybe<Blockchain_Socials_Mutation_Response>;
  /** delete single row from the table: "blockchain_socials" */
  delete_blockchain_socials_by_pk?: Maybe<Blockchain_Socials>;
  /** delete data from the table: "comment_reactions" */
  delete_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "comment_reactions" */
  delete_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "onchain_links" */
  delete_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  /** delete single row from the table: "onchain_links" */
  delete_onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** delete data from the table: "option_poll" */
  delete_option_poll?: Maybe<Option_Poll_Mutation_Response>;
  /** delete single row from the table: "option_poll" */
  delete_option_poll_by_pk?: Maybe<Option_Poll>;
  /** delete data from the table: "option_poll_votes" */
  delete_option_poll_votes?: Maybe<Option_Poll_Votes_Mutation_Response>;
  /** delete single row from the table: "option_poll_votes" */
  delete_option_poll_votes_by_pk?: Maybe<Option_Poll_Votes>;
  /** delete data from the table: "polkassembly_proposals" */
  delete_polkassembly_proposals?: Maybe<Polkassembly_Proposals_Mutation_Response>;
  /** delete single row from the table: "polkassembly_proposals" */
  delete_polkassembly_proposals_by_pk?: Maybe<Polkassembly_Proposals>;
  /** delete data from the table: "poll" */
  delete_poll?: Maybe<Poll_Mutation_Response>;
  /** delete single row from the table: "poll" */
  delete_poll_by_pk?: Maybe<Poll>;
  /** delete data from the table: "poll_votes" */
  delete_poll_votes?: Maybe<Poll_Votes_Mutation_Response>;
  /** delete single row from the table: "poll_votes" */
  delete_poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** delete data from the table: "post_reactions" */
  delete_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** delete single row from the table: "post_reactions" */
  delete_post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** delete data from the table: "post_topics" */
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  /** delete single row from the table: "post_topics" */
  delete_post_topics_by_pk?: Maybe<Post_Topics>;
  /** delete data from the table: "post_types" */
  delete_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** delete single row from the table: "post_types" */
  delete_post_types_by_pk?: Maybe<Post_Types>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "replies" */
  delete_replies?: Maybe<Replies_Mutation_Response>;
  /** delete single row from the table: "replies" */
  delete_replies_by_pk?: Maybe<Replies>;
  editPostConfirm?: Maybe<Message>;
  editPostStart?: Maybe<AddressLoginType>;
  /** insert data into the table: "blockchain_socials" */
  insert_blockchain_socials?: Maybe<Blockchain_Socials_Mutation_Response>;
  /** insert a single row into the table: "blockchain_socials" */
  insert_blockchain_socials_one?: Maybe<Blockchain_Socials>;
  /** insert data into the table: "comment_reactions" */
  insert_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "comment_reactions" */
  insert_comment_reactions_one?: Maybe<Comment_Reactions>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "onchain_links" */
  insert_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  /** insert a single row into the table: "onchain_links" */
  insert_onchain_links_one?: Maybe<Onchain_Links>;
  /** insert data into the table: "option_poll" */
  insert_option_poll?: Maybe<Option_Poll_Mutation_Response>;
  /** insert a single row into the table: "option_poll" */
  insert_option_poll_one?: Maybe<Option_Poll>;
  /** insert data into the table: "option_poll_votes" */
  insert_option_poll_votes?: Maybe<Option_Poll_Votes_Mutation_Response>;
  /** insert a single row into the table: "option_poll_votes" */
  insert_option_poll_votes_one?: Maybe<Option_Poll_Votes>;
  /** insert data into the table: "polkassembly_proposals" */
  insert_polkassembly_proposals?: Maybe<Polkassembly_Proposals_Mutation_Response>;
  /** insert a single row into the table: "polkassembly_proposals" */
  insert_polkassembly_proposals_one?: Maybe<Polkassembly_Proposals>;
  /** insert data into the table: "poll" */
  insert_poll?: Maybe<Poll_Mutation_Response>;
  /** insert a single row into the table: "poll" */
  insert_poll_one?: Maybe<Poll>;
  /** insert data into the table: "poll_votes" */
  insert_poll_votes?: Maybe<Poll_Votes_Mutation_Response>;
  /** insert a single row into the table: "poll_votes" */
  insert_poll_votes_one?: Maybe<Poll_Votes>;
  /** insert data into the table: "post_reactions" */
  insert_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** insert a single row into the table: "post_reactions" */
  insert_post_reactions_one?: Maybe<Post_Reactions>;
  /** insert data into the table: "post_topics" */
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  /** insert a single row into the table: "post_topics" */
  insert_post_topics_one?: Maybe<Post_Topics>;
  /** insert data into the table: "post_types" */
  insert_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** insert a single row into the table: "post_types" */
  insert_post_types_one?: Maybe<Post_Types>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "replies" */
  insert_replies?: Maybe<Replies_Mutation_Response>;
  /** insert a single row into the table: "replies" */
  insert_replies_one?: Maybe<Replies>;
  login?: Maybe<LoginResponse>;
  logout?: Maybe<Message>;
  multisigLinkConfirm?: Maybe<ChangeResponse>;
  multisigLinkStart?: Maybe<AddressLoginType>;
  postSubscribe?: Maybe<Message>;
  postUnsubscribe?: Maybe<Message>;
  reportContent?: Maybe<Message>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmailToken?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  setCredentialsConfirm?: Maybe<ChangeResponse>;
  setCredentialsStart?: Maybe<AddressLoginType>;
  setDefaultAddress?: Maybe<ChangeResponse>;
  signup?: Maybe<LoginResponse>;
  undoEmailChange?: Maybe<UndoEmailChangeResponse>;
  /** update data of the table: "blockchain_socials" */
  update_blockchain_socials?: Maybe<Blockchain_Socials_Mutation_Response>;
  /** update single row of the table: "blockchain_socials" */
  update_blockchain_socials_by_pk?: Maybe<Blockchain_Socials>;
  /** update data of the table: "comment_reactions" */
  update_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** update single row of the table: "comment_reactions" */
  update_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "onchain_links" */
  update_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  /** update single row of the table: "onchain_links" */
  update_onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** update data of the table: "option_poll" */
  update_option_poll?: Maybe<Option_Poll_Mutation_Response>;
  /** update single row of the table: "option_poll" */
  update_option_poll_by_pk?: Maybe<Option_Poll>;
  /** update data of the table: "option_poll_votes" */
  update_option_poll_votes?: Maybe<Option_Poll_Votes_Mutation_Response>;
  /** update single row of the table: "option_poll_votes" */
  update_option_poll_votes_by_pk?: Maybe<Option_Poll_Votes>;
  /** update data of the table: "polkassembly_proposals" */
  update_polkassembly_proposals?: Maybe<Polkassembly_Proposals_Mutation_Response>;
  /** update single row of the table: "polkassembly_proposals" */
  update_polkassembly_proposals_by_pk?: Maybe<Polkassembly_Proposals>;
  /** update data of the table: "poll" */
  update_poll?: Maybe<Poll_Mutation_Response>;
  /** update single row of the table: "poll" */
  update_poll_by_pk?: Maybe<Poll>;
  /** update data of the table: "poll_votes" */
  update_poll_votes?: Maybe<Poll_Votes_Mutation_Response>;
  /** update single row of the table: "poll_votes" */
  update_poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** update data of the table: "post_reactions" */
  update_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** update single row of the table: "post_reactions" */
  update_post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** update data of the table: "post_topics" */
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  /** update single row of the table: "post_topics" */
  update_post_topics_by_pk?: Maybe<Post_Topics>;
  /** update data of the table: "post_types" */
  update_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** update single row of the table: "post_types" */
  update_post_types_by_pk?: Maybe<Post_Types>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "replies" */
  update_replies?: Maybe<Replies_Mutation_Response>;
  /** update single row of the table: "replies" */
  update_replies_by_pk?: Maybe<Replies>;
  verifyEmail?: Maybe<ChangeResponse>;
};


/** mutation root */
export type Mutation_RootAddressLinkConfirmArgs = {
  address_id: Scalars['Int'];
  signature: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressLinkStartArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressLoginArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressLoginStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressSignupConfirmArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
  signature: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressSignupStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressUnlinkArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeAboutArgs = {
  address: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  signature: Scalars['String'];
  title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>;
};


/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeUsernameArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreatePostConfirmArgs = {
  address: Scalars['String'];
  content: Scalars['String'];
  network: Scalars['String'];
  signature: Scalars['String'];
  title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreatePostStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAccountArgs = {
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Blockchain_SocialsArgs = {
  where: Blockchain_Socials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blockchain_Socials_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Comment_ReactionsArgs = {
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Onchain_LinksArgs = {
  where: Onchain_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Option_PollArgs = {
  where: Option_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Option_Poll_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Option_Poll_VotesArgs = {
  where: Option_Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Option_Poll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PollArgs = {
  where: Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Poll_VotesArgs = {
  where: Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_ReactionsArgs = {
  where: Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TopicsArgs = {
  where: Post_Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RepliesArgs = {
  where: Replies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Replies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootEditPostConfirmArgs = {
  address: Scalars['String'];
  content: Scalars['String'];
  network: Scalars['String'];
  proposalId: Scalars['String'];
  proposalType: Scalars['String'];
  signature: Scalars['String'];
  title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootEditPostStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Blockchain_SocialsArgs = {
  objects: Array<Blockchain_Socials_Insert_Input>;
  on_conflict?: Maybe<Blockchain_Socials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blockchain_Socials_OneArgs = {
  object: Blockchain_Socials_Insert_Input;
  on_conflict?: Maybe<Blockchain_Socials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_ReactionsArgs = {
  objects: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Reactions_OneArgs = {
  object: Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onchain_LinksArgs = {
  objects: Array<Onchain_Links_Insert_Input>;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onchain_Links_OneArgs = {
  object: Onchain_Links_Insert_Input;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Option_PollArgs = {
  objects: Array<Option_Poll_Insert_Input>;
  on_conflict?: Maybe<Option_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Option_Poll_OneArgs = {
  object: Option_Poll_Insert_Input;
  on_conflict?: Maybe<Option_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Option_Poll_VotesArgs = {
  objects: Array<Option_Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Option_Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Option_Poll_Votes_OneArgs = {
  object: Option_Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Option_Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PollArgs = {
  objects: Array<Poll_Insert_Input>;
  on_conflict?: Maybe<Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_OneArgs = {
  object: Poll_Insert_Input;
  on_conflict?: Maybe<Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_VotesArgs = {
  objects: Array<Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_Votes_OneArgs = {
  object: Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_ReactionsArgs = {
  objects: Array<Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Reactions_OneArgs = {
  object: Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TopicsArgs = {
  objects: Array<Post_Topics_Insert_Input>;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Topics_OneArgs = {
  object: Post_Topics_Insert_Input;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TypesArgs = {
  objects: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Types_OneArgs = {
  object: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RepliesArgs = {
  objects: Array<Replies_Insert_Input>;
  on_conflict?: Maybe<Replies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Replies_OneArgs = {
  object: Replies_Insert_Input;
  on_conflict?: Maybe<Replies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootMultisigLinkConfirmArgs = {
  address: Scalars['String'];
  addresses: Scalars['String'];
  network: Scalars['String'];
  signatory: Scalars['String'];
  signature: Scalars['String'];
  ss58Prefix: Scalars['Int'];
  threshold: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootMultisigLinkStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootPostSubscribeArgs = {
  post_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootPostUnsubscribeArgs = {
  post_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootReportContentArgs = {
  comments?: Maybe<Scalars['String']>;
  content_id: Scalars['String'];
  network: Scalars['String'];
  reason: Scalars['String'];
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRequestResetPasswordArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootSetCredentialsConfirmArgs = {
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  signature: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSetCredentialsStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSetDefaultAddressArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUndoEmailChangeArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_Blockchain_SocialsArgs = {
  _inc?: Maybe<Blockchain_Socials_Inc_Input>;
  _set?: Maybe<Blockchain_Socials_Set_Input>;
  where: Blockchain_Socials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blockchain_Socials_By_PkArgs = {
  _inc?: Maybe<Blockchain_Socials_Inc_Input>;
  _set?: Maybe<Blockchain_Socials_Set_Input>;
  pk_columns: Blockchain_Socials_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_ReactionsArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>;
  _set?: Maybe<Comment_Reactions_Set_Input>;
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Reactions_By_PkArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>;
  _set?: Maybe<Comment_Reactions_Set_Input>;
  pk_columns: Comment_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onchain_LinksArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>;
  _set?: Maybe<Onchain_Links_Set_Input>;
  where: Onchain_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onchain_Links_By_PkArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>;
  _set?: Maybe<Onchain_Links_Set_Input>;
  pk_columns: Onchain_Links_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Option_PollArgs = {
  _inc?: Maybe<Option_Poll_Inc_Input>;
  _set?: Maybe<Option_Poll_Set_Input>;
  where: Option_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Option_Poll_By_PkArgs = {
  _inc?: Maybe<Option_Poll_Inc_Input>;
  _set?: Maybe<Option_Poll_Set_Input>;
  pk_columns: Option_Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Option_Poll_VotesArgs = {
  _inc?: Maybe<Option_Poll_Votes_Inc_Input>;
  _set?: Maybe<Option_Poll_Votes_Set_Input>;
  where: Option_Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Option_Poll_Votes_By_PkArgs = {
  _inc?: Maybe<Option_Poll_Votes_Inc_Input>;
  _set?: Maybe<Option_Poll_Votes_Set_Input>;
  pk_columns: Option_Poll_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PollArgs = {
  _inc?: Maybe<Poll_Inc_Input>;
  _set?: Maybe<Poll_Set_Input>;
  where: Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_By_PkArgs = {
  _inc?: Maybe<Poll_Inc_Input>;
  _set?: Maybe<Poll_Set_Input>;
  pk_columns: Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_VotesArgs = {
  _inc?: Maybe<Poll_Votes_Inc_Input>;
  _set?: Maybe<Poll_Votes_Set_Input>;
  where: Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_Votes_By_PkArgs = {
  _inc?: Maybe<Poll_Votes_Inc_Input>;
  _set?: Maybe<Poll_Votes_Set_Input>;
  pk_columns: Poll_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ReactionsArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>;
  _set?: Maybe<Post_Reactions_Set_Input>;
  where: Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reactions_By_PkArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>;
  _set?: Maybe<Post_Reactions_Set_Input>;
  pk_columns: Post_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TopicsArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>;
  _set?: Maybe<Post_Topics_Set_Input>;
  where: Post_Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Topics_By_PkArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>;
  _set?: Maybe<Post_Topics_Set_Input>;
  pk_columns: Post_Topics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TypesArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>;
  _set?: Maybe<Post_Types_Set_Input>;
  where: Post_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Types_By_PkArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>;
  _set?: Maybe<Post_Types_Set_Input>;
  pk_columns: Post_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RepliesArgs = {
  _inc?: Maybe<Replies_Inc_Input>;
  _set?: Maybe<Replies_Set_Input>;
  where: Replies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Replies_By_PkArgs = {
  _inc?: Maybe<Replies_Inc_Input>;
  _set?: Maybe<Replies_Set_Input>;
  pk_columns: Replies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootVerifyEmailArgs = {
  token: Scalars['String'];
};

/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_Links = {
  __typename?: 'onchain_links';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** Remote relationship field */
  onchain_bounty: Array<Maybe<Bounty>>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_motion: Array<Maybe<Motion>>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_proposal: Array<Maybe<Proposal>>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_referendum: Array<Maybe<Referendum>>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_tech_committee_proposal: Array<Maybe<TechCommitteeProposal>>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_tip: Array<Maybe<Tip>>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_treasury_spend_proposal: Array<Maybe<TreasurySpendProposal>>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  proposer_address: Scalars['String'];
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_BountyArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Bounty>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_MotionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_ReferendumArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_Tech_Committee_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Tech_Committee_Proposal>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_TipArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Tip>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 *
 *
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_Treasury_Spend_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal>;
};

/** aggregated selection of "onchain_links" */
export type Onchain_Links_Aggregate = {
  __typename?: 'onchain_links_aggregate';
  aggregate?: Maybe<Onchain_Links_Aggregate_Fields>;
  nodes: Array<Onchain_Links>;
};

/** aggregate fields of "onchain_links" */
export type Onchain_Links_Aggregate_Fields = {
  __typename?: 'onchain_links_aggregate_fields';
  avg?: Maybe<Onchain_Links_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Onchain_Links_Max_Fields>;
  min?: Maybe<Onchain_Links_Min_Fields>;
  stddev?: Maybe<Onchain_Links_Stddev_Fields>;
  stddev_pop?: Maybe<Onchain_Links_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onchain_Links_Stddev_Samp_Fields>;
  sum?: Maybe<Onchain_Links_Sum_Fields>;
  var_pop?: Maybe<Onchain_Links_Var_Pop_Fields>;
  var_samp?: Maybe<Onchain_Links_Var_Samp_Fields>;
  variance?: Maybe<Onchain_Links_Variance_Fields>;
};


/** aggregate fields of "onchain_links" */
export type Onchain_Links_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onchain_Links_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "onchain_links" */
export type Onchain_Links_Aggregate_Order_By = {
  avg?: Maybe<Onchain_Links_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Onchain_Links_Max_Order_By>;
  min?: Maybe<Onchain_Links_Min_Order_By>;
  stddev?: Maybe<Onchain_Links_Stddev_Order_By>;
  stddev_pop?: Maybe<Onchain_Links_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Onchain_Links_Stddev_Samp_Order_By>;
  sum?: Maybe<Onchain_Links_Sum_Order_By>;
  var_pop?: Maybe<Onchain_Links_Var_Pop_Order_By>;
  var_samp?: Maybe<Onchain_Links_Var_Samp_Order_By>;
  variance?: Maybe<Onchain_Links_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onchain_links" */
export type Onchain_Links_Arr_Rel_Insert_Input = {
  data: Array<Onchain_Links_Insert_Input>;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootDelete_Polkassembly_ProposalsArgs = {
  where: Polkassembly_Proposals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Polkassembly_Proposals_By_PkArgs = {
  id: Scalars['Int'];
};


/** aggregate avg on columns */
export type Onchain_Links_Avg_Fields = {
  __typename?: 'onchain_links_avg_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "onchain_links" */
export type Onchain_Links_Avg_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onchain_links". All fields are combined with a logical 'AND'. */
export type Onchain_Links_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>;
  _not?: Maybe<Onchain_Links_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  onchain_bounty_id?: Maybe<Int_Comparison_Exp>;
  onchain_motion_id?: Maybe<Int_Comparison_Exp>;
  onchain_proposal_id?: Maybe<Int_Comparison_Exp>;
  onchain_referendum_id?: Maybe<Int_Comparison_Exp>;
  onchain_tech_committee_proposal_id?: Maybe<Int_Comparison_Exp>;
  onchain_tip_id?: Maybe<String_Comparison_Exp>;
  onchain_treasury_proposal_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onchain_links" */
export enum Onchain_Links_Constraint {
  /** unique or primary key constraint */
  OnchainLinksOnchainBountyIdKey = 'onchain_links_onchain_bounty_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainMotionIdKey = 'onchain_links_onchain_motion_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainReferendumIdKey = 'onchain_links_onchain_referendum_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainTechCommitteeProposalIdKey = 'onchain_links_onchain_tech_committee_proposal_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainTipIdKey = 'onchain_links_onchain_tip_id_key',
  /** unique or primary key constraint */
  OnchainProposalsChainDbIdKey = 'onchain_proposals_chain_db_id_key',
  /** unique or primary key constraint */
  ProposalsPkey = 'proposals_pkey',
  /** unique or primary key constraint */
  ProposalsPostIdKey = 'proposals_post_id_key'
}

/** input type for incrementing integer column in table "onchain_links" */
export type Onchain_Links_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "onchain_links" */
export type Onchain_Links_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Onchain_Links_Max_Fields = {
  __typename?: 'onchain_links_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "onchain_links" */
export type Onchain_Links_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_tip_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Onchain_Links_Min_Fields = {
  __typename?: 'onchain_links_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "onchain_links" */
export type Onchain_Links_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_tip_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "onchain_links" */
export type Onchain_Links_Mutation_Response = {
  __typename?: 'onchain_links_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Onchain_Links>;
};

/** input type for inserting object relation for remote table "onchain_links" */
export type Onchain_Links_Obj_Rel_Insert_Input = {
  data: Onchain_Links_Insert_Input;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};

/** on conflict condition type for table "onchain_links" */
export type Onchain_Links_On_Conflict = {
  constraint: Onchain_Links_Constraint;
  update_columns: Array<Onchain_Links_Update_Column>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};

/** ordering options when selecting data from "onchain_links" */
export type Onchain_Links_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_tip_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

/** primary key columns input for table: "onchain_links" */
export type Onchain_Links_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "onchain_links" */
export enum Onchain_Links_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OnchainBountyId = 'onchain_bounty_id',
  /** column name */
  OnchainMotionId = 'onchain_motion_id',
  /** column name */
  OnchainProposalId = 'onchain_proposal_id',
  /** column name */
  OnchainReferendumId = 'onchain_referendum_id',
  /** column name */
  OnchainTechCommitteeProposalId = 'onchain_tech_committee_proposal_id',
  /** column name */
  OnchainTipId = 'onchain_tip_id',
  /** column name */
  OnchainTreasuryProposalId = 'onchain_treasury_proposal_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProposerAddress = 'proposer_address'
}

/** input type for updating data in table "onchain_links" */
export type Onchain_Links_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Onchain_Links_Stddev_Fields = {
  __typename?: 'onchain_links_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "onchain_links" */
export type Onchain_Links_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onchain_Links_Stddev_Pop_Fields = {
  __typename?: 'onchain_links_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "onchain_links" */
export type Onchain_Links_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onchain_Links_Stddev_Samp_Fields = {
  __typename?: 'onchain_links_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "onchain_links" */
export type Onchain_Links_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Onchain_Links_Sum_Fields = {
  __typename?: 'onchain_links_sum_fields';
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "onchain_links" */
export type Onchain_Links_Sum_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "onchain_links" */
export enum Onchain_Links_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OnchainBountyId = 'onchain_bounty_id',
  /** column name */
  OnchainMotionId = 'onchain_motion_id',
  /** column name */
  OnchainProposalId = 'onchain_proposal_id',
  /** column name */
  OnchainReferendumId = 'onchain_referendum_id',
  /** column name */
  OnchainTechCommitteeProposalId = 'onchain_tech_committee_proposal_id',
  /** column name */
  OnchainTipId = 'onchain_tip_id',
  /** column name */
  OnchainTreasuryProposalId = 'onchain_treasury_proposal_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProposerAddress = 'proposer_address'
}

/** aggregate var_pop on columns */
export type Onchain_Links_Var_Pop_Fields = {
  __typename?: 'onchain_links_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "onchain_links" */
export type Onchain_Links_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onchain_Links_Var_Samp_Fields = {
  __typename?: 'onchain_links_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "onchain_links" */
export type Onchain_Links_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Onchain_Links_Variance_Fields = {
  __typename?: 'onchain_links_variance_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_tech_committee_proposal_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "onchain_links" */
export type Onchain_Links_Variance_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tech_committee_proposal_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_RootInsert_Polkassembly_ProposalsArgs = {
  objects: Array<Polkassembly_Proposals_Insert_Input>;
  on_conflict?: Maybe<Polkassembly_Proposals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Polkassembly_Proposals_OneArgs = {
  object: Polkassembly_Proposals_Insert_Input;
  on_conflict?: Maybe<Polkassembly_Proposals_On_Conflict>;
};


/** columns and relationships of "option_poll" */
export type Option_Poll = {
  __typename?: 'option_poll';
  created_at: Scalars['timestamptz'];
  end_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  option_poll_post: Posts;
  /** An array relationship */
  option_poll_votes: Array<Option_Poll_Votes>;
  /** An aggregated array relationship */
  option_poll_votes_aggregate: Option_Poll_Votes_Aggregate;
  options: Scalars['String'];
  post_id: Scalars['Int'];
  question: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "option_poll" */
export type Option_PollOption_Poll_VotesArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Votes_Order_By>>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};


/** columns and relationships of "option_poll" */
export type Option_PollOption_Poll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Votes_Order_By>>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};

/** aggregated selection of "option_poll" */
export type Option_Poll_Aggregate = {
  __typename?: 'option_poll_aggregate';
  aggregate?: Maybe<Option_Poll_Aggregate_Fields>;
  nodes: Array<Option_Poll>;
};

/** aggregate fields of "option_poll" */
export type Option_Poll_Aggregate_Fields = {
  __typename?: 'option_poll_aggregate_fields';
  avg?: Maybe<Option_Poll_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Option_Poll_Max_Fields>;
  min?: Maybe<Option_Poll_Min_Fields>;
  stddev?: Maybe<Option_Poll_Stddev_Fields>;
  stddev_pop?: Maybe<Option_Poll_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Option_Poll_Stddev_Samp_Fields>;
  sum?: Maybe<Option_Poll_Sum_Fields>;
  var_pop?: Maybe<Option_Poll_Var_Pop_Fields>;
  var_samp?: Maybe<Option_Poll_Var_Samp_Fields>;
  variance?: Maybe<Option_Poll_Variance_Fields>;
};


/** aggregate fields of "option_poll" */
export type Option_Poll_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Option_Poll_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "option_poll" */
export type Option_Poll_Aggregate_Order_By = {
  avg?: Maybe<Option_Poll_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Option_Poll_Max_Order_By>;
  min?: Maybe<Option_Poll_Min_Order_By>;
  stddev?: Maybe<Option_Poll_Stddev_Order_By>;
  stddev_pop?: Maybe<Option_Poll_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Option_Poll_Stddev_Samp_Order_By>;
  sum?: Maybe<Option_Poll_Sum_Order_By>;
  var_pop?: Maybe<Option_Poll_Var_Pop_Order_By>;
  var_samp?: Maybe<Option_Poll_Var_Samp_Order_By>;
  variance?: Maybe<Option_Poll_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "option_poll" */
export type Option_Poll_Arr_Rel_Insert_Input = {
  data: Array<Option_Poll_Insert_Input>;
  on_conflict?: Maybe<Option_Poll_On_Conflict>;
};

/** aggregate avg on columns */
export type Option_Poll_Avg_Fields = {
  __typename?: 'option_poll_avg_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "option_poll" */
export type Option_Poll_Avg_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "option_poll". All fields are combined with a logical 'AND'. */
export type Option_Poll_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Option_Poll_Bool_Exp>>>;
  _not?: Maybe<Option_Poll_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Option_Poll_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_at?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  option_poll_post?: Maybe<Posts_Bool_Exp>;
  option_poll_votes?: Maybe<Option_Poll_Votes_Bool_Exp>;
  options?: Maybe<String_Comparison_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "option_poll" */
export enum Option_Poll_Constraint {
  /** unique or primary key constraint */
  OptionPollPkey = 'option_poll_pkey'
}

/** input type for incrementing integer column in table "option_poll" */
export type Option_Poll_Inc_Input = {
  end_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "option_poll" */
export type Option_Poll_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  option_poll_post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  option_poll_votes?: Maybe<Option_Poll_Votes_Arr_Rel_Insert_Input>;
  options?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Option_Poll_Max_Fields = {
  __typename?: 'option_poll_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "option_poll" */
export type Option_Poll_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  options?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Option_Poll_Min_Fields = {
  __typename?: 'option_poll_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "option_poll" */
export type Option_Poll_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  options?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "option_poll" */
export type Option_Poll_Mutation_Response = {
  __typename?: 'option_poll_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Option_Poll>;
};

/** input type for inserting object relation for remote table "option_poll" */
export type Option_Poll_Obj_Rel_Insert_Input = {
  data: Option_Poll_Insert_Input;
  on_conflict?: Maybe<Option_Poll_On_Conflict>;
};

/** on conflict condition type for table "option_poll" */
export type Option_Poll_On_Conflict = {
  constraint: Option_Poll_Constraint;
  update_columns: Array<Option_Poll_Update_Column>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};

/** ordering options when selecting data from "option_poll" */
export type Option_Poll_Order_By = {
  created_at?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  option_poll_post?: Maybe<Posts_Order_By>;
  option_poll_votes_aggregate?: Maybe<Option_Poll_Votes_Aggregate_Order_By>;
  options?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "option_poll" */
export type Option_Poll_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "option_poll" */
export enum Option_Poll_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Question = 'question',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "option_poll" */
export type Option_Poll_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Option_Poll_Stddev_Fields = {
  __typename?: 'option_poll_stddev_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "option_poll" */
export type Option_Poll_Stddev_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Option_Poll_Stddev_Pop_Fields = {
  __typename?: 'option_poll_stddev_pop_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "option_poll" */
export type Option_Poll_Stddev_Pop_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Option_Poll_Stddev_Samp_Fields = {
  __typename?: 'option_poll_stddev_samp_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "option_poll" */
export type Option_Poll_Stddev_Samp_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Option_Poll_Sum_Fields = {
  __typename?: 'option_poll_sum_fields';
  end_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "option_poll" */
export type Option_Poll_Sum_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "option_poll" */
export enum Option_Poll_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Question = 'question',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Option_Poll_Var_Pop_Fields = {
  __typename?: 'option_poll_var_pop_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "option_poll" */
export type Option_Poll_Var_Pop_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Option_Poll_Var_Samp_Fields = {
  __typename?: 'option_poll_var_samp_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "option_poll" */
export type Option_Poll_Var_Samp_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Option_Poll_Variance_Fields = {
  __typename?: 'option_poll_variance_fields';
  end_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "option_poll" */
export type Option_Poll_Variance_Order_By = {
  end_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "option_poll_votes" */
export type Option_Poll_Votes = {
  __typename?: 'option_poll_votes';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  option: Scalars['String'];
  /** An object relationship */
  option_poll: Option_Poll;
  option_poll_id: Scalars['Int'];
  /** Remote relationship field */
  option_poll_voter?: Maybe<User>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "option_poll_votes" */
export type Option_Poll_Votes_Aggregate = {
  __typename?: 'option_poll_votes_aggregate';
  aggregate?: Maybe<Option_Poll_Votes_Aggregate_Fields>;
  nodes: Array<Option_Poll_Votes>;
};

/** aggregate fields of "option_poll_votes" */
export type Option_Poll_Votes_Aggregate_Fields = {
  __typename?: 'option_poll_votes_aggregate_fields';
  avg?: Maybe<Option_Poll_Votes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Option_Poll_Votes_Max_Fields>;
  min?: Maybe<Option_Poll_Votes_Min_Fields>;
  stddev?: Maybe<Option_Poll_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Option_Poll_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Option_Poll_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Option_Poll_Votes_Sum_Fields>;
  var_pop?: Maybe<Option_Poll_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Option_Poll_Votes_Var_Samp_Fields>;
  variance?: Maybe<Option_Poll_Votes_Variance_Fields>;
};


/** aggregate fields of "option_poll_votes" */
export type Option_Poll_Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "option_poll_votes" */
export type Option_Poll_Votes_Aggregate_Order_By = {
  avg?: Maybe<Option_Poll_Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Option_Poll_Votes_Max_Order_By>;
  min?: Maybe<Option_Poll_Votes_Min_Order_By>;
  stddev?: Maybe<Option_Poll_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Option_Poll_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Option_Poll_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Option_Poll_Votes_Sum_Order_By>;
  var_pop?: Maybe<Option_Poll_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Option_Poll_Votes_Var_Samp_Order_By>;
  variance?: Maybe<Option_Poll_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "option_poll_votes" */
export type Option_Poll_Votes_Arr_Rel_Insert_Input = {
  data: Array<Option_Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Option_Poll_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Option_Poll_Votes_Avg_Fields = {
  __typename?: 'option_poll_votes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "option_poll_votes". All fields are combined with a logical 'AND'. */
export type Option_Poll_Votes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Option_Poll_Votes_Bool_Exp>>>;
  _not?: Maybe<Option_Poll_Votes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Option_Poll_Votes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  option?: Maybe<String_Comparison_Exp>;
  option_poll?: Maybe<Option_Poll_Bool_Exp>;
  option_poll_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "option_poll_votes" */
export enum Option_Poll_Votes_Constraint {
  /** unique or primary key constraint */
  OptionPollVotesPkey = 'option_poll_votes_pkey'
}

/** input type for incrementing integer column in table "option_poll_votes" */
export type Option_Poll_Votes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  option_poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "option_poll_votes" */
export type Option_Poll_Votes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  option?: Maybe<Scalars['String']>;
  option_poll?: Maybe<Option_Poll_Obj_Rel_Insert_Input>;
  option_poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Option_Poll_Votes_Max_Fields = {
  __typename?: 'option_poll_votes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  option?: Maybe<Scalars['String']>;
  option_poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  option?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Option_Poll_Votes_Min_Fields = {
  __typename?: 'option_poll_votes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  option?: Maybe<Scalars['String']>;
  option_poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  option?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "option_poll_votes" */
export type Option_Poll_Votes_Mutation_Response = {
  __typename?: 'option_poll_votes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Option_Poll_Votes>;
};

/** input type for inserting object relation for remote table "option_poll_votes" */
export type Option_Poll_Votes_Obj_Rel_Insert_Input = {
  data: Option_Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Option_Poll_Votes_On_Conflict>;
};

/** on conflict condition type for table "option_poll_votes" */
export type Option_Poll_Votes_On_Conflict = {
  constraint: Option_Poll_Votes_Constraint;
  update_columns: Array<Option_Poll_Votes_Update_Column>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};

/** ordering options when selecting data from "option_poll_votes" */
export type Option_Poll_Votes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  option?: Maybe<Order_By>;
  option_poll?: Maybe<Option_Poll_Order_By>;
  option_poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "option_poll_votes" */
export type Option_Poll_Votes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "option_poll_votes" */
export enum Option_Poll_Votes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Option = 'option',
  /** column name */
  OptionPollId = 'option_poll_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "option_poll_votes" */
export type Option_Poll_Votes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  option?: Maybe<Scalars['String']>;
  option_poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Option_Poll_Votes_Stddev_Fields = {
  __typename?: 'option_poll_votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Option_Poll_Votes_Stddev_Pop_Fields = {
  __typename?: 'option_poll_votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Option_Poll_Votes_Stddev_Samp_Fields = {
  __typename?: 'option_poll_votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Option_Poll_Votes_Sum_Fields = {
  __typename?: 'option_poll_votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  option_poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "option_poll_votes" */
export enum Option_Poll_Votes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Option = 'option',
  /** column name */
  OptionPollId = 'option_poll_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Option_Poll_Votes_Var_Pop_Fields = {
  __typename?: 'option_poll_votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Option_Poll_Votes_Var_Samp_Fields = {
  __typename?: 'option_poll_votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Option_Poll_Votes_Variance_Fields = {
  __typename?: 'option_poll_votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  option_poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "option_poll_votes" */
export type Option_Poll_Votes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  option_poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "poll" */
export type Poll = {
  __typename?: 'poll';
  block_end: Scalars['Int'];
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An array relationship */
  poll_votes: Array<Poll_Votes>;
  /** An aggregated array relationship */
  poll_votes_aggregate: Poll_Votes_Aggregate;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "poll" */
export type PollPoll_VotesArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollPoll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};

/** aggregated selection of "poll" */
export type Poll_Aggregate = {
  __typename?: 'poll_aggregate';
  aggregate?: Maybe<Poll_Aggregate_Fields>;
  nodes: Array<Poll>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_Fields = {
  __typename?: 'poll_aggregate_fields';
  avg?: Maybe<Poll_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Max_Fields>;
  min?: Maybe<Poll_Min_Fields>;
  stddev?: Maybe<Poll_Stddev_Fields>;
  stddev_pop?: Maybe<Poll_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poll_Stddev_Samp_Fields>;
  sum?: Maybe<Poll_Sum_Fields>;
  var_pop?: Maybe<Poll_Var_Pop_Fields>;
  var_samp?: Maybe<Poll_Var_Samp_Fields>;
  variance?: Maybe<Poll_Variance_Fields>;
};


/** aggregate fields of "poll" */
export type Poll_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll" */
export type Poll_Aggregate_Order_By = {
  avg?: Maybe<Poll_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Max_Order_By>;
  min?: Maybe<Poll_Min_Order_By>;
  stddev?: Maybe<Poll_Stddev_Order_By>;
  stddev_pop?: Maybe<Poll_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Poll_Stddev_Samp_Order_By>;
  sum?: Maybe<Poll_Sum_Order_By>;
  var_pop?: Maybe<Poll_Var_Pop_Order_By>;
  var_samp?: Maybe<Poll_Var_Samp_Order_By>;
  variance?: Maybe<Poll_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poll" */
export type Poll_Arr_Rel_Insert_Input = {
  data: Array<Poll_Insert_Input>;
  on_conflict?: Maybe<Poll_On_Conflict>;
};

/** aggregate avg on columns */
export type Poll_Avg_Fields = {
  __typename?: 'poll_avg_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "poll" */
export type Poll_Avg_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poll". All fields are combined with a logical 'AND'. */
export type Poll_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Bool_Exp>>>;
  _not?: Maybe<Poll_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Bool_Exp>>>;
  block_end?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  poll_votes?: Maybe<Poll_Votes_Bool_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll" */
export enum Poll_Constraint {
  /** unique or primary key constraint */
  PollPkey = 'poll_pkey'
}

/** input type for incrementing integer column in table "poll" */
export type Poll_Inc_Input = {
  block_end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "poll" */
export type Poll_Insert_Input = {
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_votes?: Maybe<Poll_Votes_Arr_Rel_Insert_Input>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Poll_Max_Fields = {
  __typename?: 'poll_max_fields';
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "poll" */
export type Poll_Max_Order_By = {
  block_end?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Min_Fields = {
  __typename?: 'poll_min_fields';
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "poll" */
export type Poll_Min_Order_By = {
  block_end?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll" */
export type Poll_Mutation_Response = {
  __typename?: 'poll_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll>;
};

/** input type for inserting object relation for remote table "poll" */
export type Poll_Obj_Rel_Insert_Input = {
  data: Poll_Insert_Input;
  on_conflict?: Maybe<Poll_On_Conflict>;
};

/** on conflict condition type for table "poll" */
export type Poll_On_Conflict = {
  constraint: Poll_Constraint;
  update_columns: Array<Poll_Update_Column>;
  where?: Maybe<Poll_Bool_Exp>;
};

/** ordering options when selecting data from "poll" */
export type Poll_Order_By = {
  block_end?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_votes_aggregate?: Maybe<Poll_Votes_Aggregate_Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "poll" */
export type Poll_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "poll" */
export enum Poll_Select_Column {
  /** column name */
  BlockEnd = 'block_end',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "poll" */
export type Poll_Set_Input = {
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Poll_Stddev_Fields = {
  __typename?: 'poll_stddev_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "poll" */
export type Poll_Stddev_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poll_Stddev_Pop_Fields = {
  __typename?: 'poll_stddev_pop_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "poll" */
export type Poll_Stddev_Pop_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poll_Stddev_Samp_Fields = {
  __typename?: 'poll_stddev_samp_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "poll" */
export type Poll_Stddev_Samp_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Poll_Sum_Fields = {
  __typename?: 'poll_sum_fields';
  block_end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "poll" */
export type Poll_Sum_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "poll" */
export enum Poll_Update_Column {
  /** column name */
  BlockEnd = 'block_end',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Poll_Var_Pop_Fields = {
  __typename?: 'poll_var_pop_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};


/** mutation root */
export type Mutation_RootUpdate_Polkassembly_ProposalsArgs = {
  _inc?: Maybe<Polkassembly_Proposals_Inc_Input>;
  _set?: Maybe<Polkassembly_Proposals_Set_Input>;
  where: Polkassembly_Proposals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Polkassembly_Proposals_By_PkArgs = {
  _inc?: Maybe<Polkassembly_Proposals_Inc_Input>;
  _set?: Maybe<Polkassembly_Proposals_Set_Input>;
  pk_columns: Polkassembly_Proposals_Pk_Columns_Input;
};


/** order by var_pop() on columns of table "poll" */
export type Poll_Var_Pop_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poll_Var_Samp_Fields = {
  __typename?: 'poll_var_samp_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "poll" */
export type Poll_Var_Samp_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Poll_Variance_Fields = {
  __typename?: 'poll_variance_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "poll" */
export type Poll_Variance_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "poll_votes" */
export type Poll_Votes = {
  __typename?: 'poll_votes';
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  poll: Poll;
  poll_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['Int'];
  vote: Scalars['bpchar'];
  /** Remote relationship field */
  voter?: Maybe<User>;
};

/** aggregated selection of "poll_votes" */
export type Poll_Votes_Aggregate = {
  __typename?: 'poll_votes_aggregate';
  aggregate?: Maybe<Poll_Votes_Aggregate_Fields>;
  nodes: Array<Poll_Votes>;
};

/** aggregate fields of "poll_votes" */
export type Poll_Votes_Aggregate_Fields = {
  __typename?: 'poll_votes_aggregate_fields';
  avg?: Maybe<Poll_Votes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Votes_Max_Fields>;
  min?: Maybe<Poll_Votes_Min_Fields>;
  stddev?: Maybe<Poll_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Poll_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poll_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Poll_Votes_Sum_Fields>;
  var_pop?: Maybe<Poll_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Poll_Votes_Var_Samp_Fields>;
  variance?: Maybe<Poll_Votes_Variance_Fields>;
};


/** aggregate fields of "poll_votes" */
export type Poll_Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll_votes" */
export type Poll_Votes_Aggregate_Order_By = {
  avg?: Maybe<Poll_Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Votes_Max_Order_By>;
  min?: Maybe<Poll_Votes_Min_Order_By>;
  stddev?: Maybe<Poll_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Poll_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Poll_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Poll_Votes_Sum_Order_By>;
  var_pop?: Maybe<Poll_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Poll_Votes_Var_Samp_Order_By>;
  variance?: Maybe<Poll_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poll_votes" */
export type Poll_Votes_Arr_Rel_Insert_Input = {
  data: Array<Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Poll_Votes_Avg_Fields = {
  __typename?: 'poll_votes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "poll_votes" */
export type Poll_Votes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poll_votes". All fields are combined with a logical 'AND'. */
export type Poll_Votes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Votes_Bool_Exp>>>;
  _not?: Maybe<Poll_Votes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Votes_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  vote?: Maybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll_votes" */
export enum Poll_Votes_Constraint {
  /** unique or primary key constraint */
  PollVotesPkey = 'poll_votes_pkey',
  /** unique or primary key constraint */
  PollVotesPollIdUserIdKey = 'poll_votes_poll_id_user_id_key'
}

/** input type for incrementing integer column in table "poll_votes" */
export type Poll_Votes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "poll_votes" */
export type Poll_Votes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll?: Maybe<Poll_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Poll_Votes_Max_Fields = {
  __typename?: 'poll_votes_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "poll_votes" */
export type Poll_Votes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Votes_Min_Fields = {
  __typename?: 'poll_votes_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "poll_votes" */
export type Poll_Votes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll_votes" */
export type Poll_Votes_Mutation_Response = {
  __typename?: 'poll_votes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll_Votes>;
};

/** input type for inserting object relation for remote table "poll_votes" */
export type Poll_Votes_Obj_Rel_Insert_Input = {
  data: Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};

/** on conflict condition type for table "poll_votes" */
export type Poll_Votes_On_Conflict = {
  constraint: Poll_Votes_Constraint;
  update_columns: Array<Poll_Votes_Update_Column>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};

/** ordering options when selecting data from "poll_votes" */
export type Poll_Votes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  vote?: Maybe<Order_By>;
};

/** primary key columns input for table: "poll_votes" */
export type Poll_Votes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "poll_votes" */
export enum Poll_Votes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "poll_votes" */
export type Poll_Votes_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Poll_Votes_Stddev_Fields = {
  __typename?: 'poll_votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "poll_votes" */
export type Poll_Votes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poll_Votes_Stddev_Pop_Fields = {
  __typename?: 'poll_votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "poll_votes" */
export type Poll_Votes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poll_Votes_Stddev_Samp_Fields = {
  __typename?: 'poll_votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "poll_votes" */
export type Poll_Votes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Poll_Votes_Sum_Fields = {
  __typename?: 'poll_votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "poll_votes" */
export type Poll_Votes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "poll_votes" */
export enum Poll_Votes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Vote = 'vote'
}

/** aggregate var_pop on columns */
export type Poll_Votes_Var_Pop_Fields = {
  __typename?: 'poll_votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "poll_votes" */
export type Poll_Votes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poll_Votes_Var_Samp_Fields = {
  __typename?: 'poll_votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "poll_votes" */
export type Poll_Votes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Poll_Votes_Variance_Fields = {
  __typename?: 'poll_votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "poll_votes" */
export type Poll_Votes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_last_update" */
export type Post_Last_Update = {
  __typename?: 'post_last_update';
  comment_id?: Maybe<Scalars['uuid']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "post_last_update" */
export type Post_Last_Update_Aggregate = {
  __typename?: 'post_last_update_aggregate';
  aggregate?: Maybe<Post_Last_Update_Aggregate_Fields>;
  nodes: Array<Post_Last_Update>;
};

/** aggregate fields of "post_last_update" */
export type Post_Last_Update_Aggregate_Fields = {
  __typename?: 'post_last_update_aggregate_fields';
  avg?: Maybe<Post_Last_Update_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Last_Update_Max_Fields>;
  min?: Maybe<Post_Last_Update_Min_Fields>;
  stddev?: Maybe<Post_Last_Update_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Last_Update_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Last_Update_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Last_Update_Sum_Fields>;
  var_pop?: Maybe<Post_Last_Update_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Last_Update_Var_Samp_Fields>;
  variance?: Maybe<Post_Last_Update_Variance_Fields>;
};


/** aggregate fields of "post_last_update" */
export type Post_Last_Update_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Last_Update_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_last_update" */
export type Post_Last_Update_Aggregate_Order_By = {
  avg?: Maybe<Post_Last_Update_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Last_Update_Max_Order_By>;
  min?: Maybe<Post_Last_Update_Min_Order_By>;
  stddev?: Maybe<Post_Last_Update_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Last_Update_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Last_Update_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Last_Update_Sum_Order_By>;
  var_pop?: Maybe<Post_Last_Update_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Last_Update_Var_Samp_Order_By>;
  variance?: Maybe<Post_Last_Update_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Last_Update_Avg_Fields = {
  __typename?: 'post_last_update_avg_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_last_update" */
export type Post_Last_Update_Avg_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_last_update". All fields are combined with a logical 'AND'. */
export type Post_Last_Update_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Last_Update_Bool_Exp>>>;
  _not?: Maybe<Post_Last_Update_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Last_Update_Bool_Exp>>>;
  comment_id?: Maybe<Uuid_Comparison_Exp>;
  last_update?: Maybe<Timestamptz_Comparison_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Last_Update_Max_Fields = {
  __typename?: 'post_last_update_max_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_last_update" */
export type Post_Last_Update_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Last_Update_Min_Fields = {
  __typename?: 'post_last_update_min_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_last_update" */
export type Post_Last_Update_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "post_last_update" */
export type Post_Last_Update_Order_By = {
  comment_id?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** select columns of table "post_last_update" */
export enum Post_Last_Update_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  PostId = 'post_id'
}

/** aggregate stddev on columns */
export type Post_Last_Update_Stddev_Fields = {
  __typename?: 'post_last_update_stddev_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_last_update" */
export type Post_Last_Update_Stddev_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Last_Update_Stddev_Pop_Fields = {
  __typename?: 'post_last_update_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_last_update" */
export type Post_Last_Update_Stddev_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Last_Update_Stddev_Samp_Fields = {
  __typename?: 'post_last_update_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_last_update" */
export type Post_Last_Update_Stddev_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Last_Update_Sum_Fields = {
  __typename?: 'post_last_update_sum_fields';
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_last_update" */
export type Post_Last_Update_Sum_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Last_Update_Var_Pop_Fields = {
  __typename?: 'post_last_update_var_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_last_update" */
export type Post_Last_Update_Var_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Last_Update_Var_Samp_Fields = {
  __typename?: 'post_last_update_var_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_last_update" */
export type Post_Last_Update_Var_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Last_Update_Variance_Fields = {
  __typename?: 'post_last_update_variance_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_last_update" */
export type Post_Last_Update_Variance_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_reactions" */
export type Post_Reactions = {
  __typename?: 'post_reactions';
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** Remote relationship field */
  reacting_user?: Maybe<User>;
  reaction: Scalars['bpchar'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "post_reactions" */
export type Post_Reactions_Aggregate = {
  __typename?: 'post_reactions_aggregate';
  aggregate?: Maybe<Post_Reactions_Aggregate_Fields>;
  nodes: Array<Post_Reactions>;
};

/** aggregate fields of "post_reactions" */
export type Post_Reactions_Aggregate_Fields = {
  __typename?: 'post_reactions_aggregate_fields';
  avg?: Maybe<Post_Reactions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Reactions_Max_Fields>;
  min?: Maybe<Post_Reactions_Min_Fields>;
  stddev?: Maybe<Post_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Reactions_Sum_Fields>;
  var_pop?: Maybe<Post_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Post_Reactions_Variance_Fields>;
};


/** aggregate fields of "post_reactions" */
export type Post_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_reactions" */
export type Post_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Post_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Reactions_Max_Order_By>;
  min?: Maybe<Post_Reactions_Min_Order_By>;
  stddev?: Maybe<Post_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Post_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Post_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_reactions" */
export type Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Reactions_Avg_Fields = {
  __typename?: 'post_reactions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_reactions" */
export type Post_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_reactions". All fields are combined with a logical 'AND'. */
export type Post_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Reactions_Bool_Exp>>>;
  _not?: Maybe<Post_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Reactions_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  reaction?: Maybe<Bpchar_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_reactions" */
export enum Post_Reactions_Constraint {
  /** unique or primary key constraint */
  PostReactionsPkey = 'post_reactions_pkey',
  /** unique or primary key constraint */
  PostReactionsPostIdUserIdReactionKey = 'post_reactions_post_id_user_id_reaction_key'
}

/** input type for incrementing integer column in table "post_reactions" */
export type Post_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_reactions" */
export type Post_Reactions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Post_Reactions_Max_Fields = {
  __typename?: 'post_reactions_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_reactions" */
export type Post_Reactions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Reactions_Min_Fields = {
  __typename?: 'post_reactions_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_reactions" */
export type Post_Reactions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_reactions" */
export type Post_Reactions_Mutation_Response = {
  __typename?: 'post_reactions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Reactions>;
};

/** input type for inserting object relation for remote table "post_reactions" */
export type Post_Reactions_Obj_Rel_Insert_Input = {
  data: Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};

/** on conflict condition type for table "post_reactions" */
export type Post_Reactions_On_Conflict = {
  constraint: Post_Reactions_Constraint;
  update_columns: Array<Post_Reactions_Update_Column>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};

/** ordering options when selecting data from "post_reactions" */
export type Post_Reactions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "post_reactions" */
export type Post_Reactions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_reactions" */
export enum Post_Reactions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "post_reactions" */
export type Post_Reactions_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Post_Reactions_Stddev_Fields = {
  __typename?: 'post_reactions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_reactions" */
export type Post_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Reactions_Stddev_Pop_Fields = {
  __typename?: 'post_reactions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_reactions" */
export type Post_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Reactions_Stddev_Samp_Fields = {
  __typename?: 'post_reactions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_reactions" */
export type Post_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Reactions_Sum_Fields = {
  __typename?: 'post_reactions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_reactions" */
export type Post_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "post_reactions" */
export enum Post_Reactions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Post_Reactions_Var_Pop_Fields = {
  __typename?: 'post_reactions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_reactions" */
export type Post_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Reactions_Var_Samp_Fields = {
  __typename?: 'post_reactions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_reactions" */
export type Post_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Reactions_Variance_Fields = {
  __typename?: 'post_reactions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_reactions" */
export type Post_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_topics" */
export type Post_Topics = {
  __typename?: 'post_topics';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate;
};


/** columns and relationships of "post_topics" */
export type Post_TopicsPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_topics" */
export type Post_TopicsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_topics" */
export type Post_Topics_Aggregate = {
  __typename?: 'post_topics_aggregate';
  aggregate?: Maybe<Post_Topics_Aggregate_Fields>;
  nodes: Array<Post_Topics>;
};

/** aggregate fields of "post_topics" */
export type Post_Topics_Aggregate_Fields = {
  __typename?: 'post_topics_aggregate_fields';
  avg?: Maybe<Post_Topics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Topics_Max_Fields>;
  min?: Maybe<Post_Topics_Min_Fields>;
  stddev?: Maybe<Post_Topics_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Topics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Topics_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Topics_Sum_Fields>;
  var_pop?: Maybe<Post_Topics_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Topics_Var_Samp_Fields>;
  variance?: Maybe<Post_Topics_Variance_Fields>;
};


/** aggregate fields of "post_topics" */
export type Post_Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Topics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_topics" */
export type Post_Topics_Aggregate_Order_By = {
  avg?: Maybe<Post_Topics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Topics_Max_Order_By>;
  min?: Maybe<Post_Topics_Min_Order_By>;
  stddev?: Maybe<Post_Topics_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Topics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Topics_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Topics_Sum_Order_By>;
  var_pop?: Maybe<Post_Topics_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Topics_Var_Samp_Order_By>;
  variance?: Maybe<Post_Topics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_topics" */
export type Post_Topics_Arr_Rel_Insert_Input = {
  data: Array<Post_Topics_Insert_Input>;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Topics_Avg_Fields = {
  __typename?: 'post_topics_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_topics" */
export type Post_Topics_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_topics". All fields are combined with a logical 'AND'. */
export type Post_Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>;
  _not?: Maybe<Post_Topics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
};

/** unique or primary key constraints on table "post_topics" */
export enum Post_Topics_Constraint {
  /** unique or primary key constraint */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer column in table "post_topics" */
export type Post_Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_topics" */
export type Post_Topics_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Topics_Max_Fields = {
  __typename?: 'post_topics_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_topics" */
export type Post_Topics_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Topics_Min_Fields = {
  __typename?: 'post_topics_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_topics" */
export type Post_Topics_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_topics" */
export type Post_Topics_Mutation_Response = {
  __typename?: 'post_topics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Topics>;
};

/** input type for inserting object relation for remote table "post_topics" */
export type Post_Topics_Obj_Rel_Insert_Input = {
  data: Post_Topics_Insert_Input;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};

/** on conflict condition type for table "post_topics" */
export type Post_Topics_On_Conflict = {
  constraint: Post_Topics_Constraint;
  update_columns: Array<Post_Topics_Update_Column>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};

/** ordering options when selecting data from "post_topics" */
export type Post_Topics_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: "post_topics" */
export type Post_Topics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_topics" */
export enum Post_Topics_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "post_topics" */
export type Post_Topics_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Topics_Stddev_Fields = {
  __typename?: 'post_topics_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_topics" */
export type Post_Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Topics_Stddev_Pop_Fields = {
  __typename?: 'post_topics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_topics" */
export type Post_Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Topics_Stddev_Samp_Fields = {
  __typename?: 'post_topics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_topics" */
export type Post_Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Topics_Sum_Fields = {
  __typename?: 'post_topics_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_topics" */
export type Post_Topics_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "post_topics" */
export enum Post_Topics_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Post_Topics_Var_Pop_Fields = {
  __typename?: 'post_topics_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_topics" */
export type Post_Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Topics_Var_Samp_Fields = {
  __typename?: 'post_topics_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_topics" */
export type Post_Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Topics_Variance_Fields = {
  __typename?: 'post_topics_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_topics" */
export type Post_Topics_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "post_types" */
export type Post_Types = {
  __typename?: 'post_types';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate;
};


/** columns and relationships of "post_types" */
export type Post_TypesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_types" */
export type Post_TypesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_types" */
export type Post_Types_Aggregate = {
  __typename?: 'post_types_aggregate';
  aggregate?: Maybe<Post_Types_Aggregate_Fields>;
  nodes: Array<Post_Types>;
};

/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_Fields = {
  __typename?: 'post_types_aggregate_fields';
  avg?: Maybe<Post_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Types_Max_Fields>;
  min?: Maybe<Post_Types_Min_Fields>;
  stddev?: Maybe<Post_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Types_Sum_Fields>;
  var_pop?: Maybe<Post_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Types_Var_Samp_Fields>;
  variance?: Maybe<Post_Types_Variance_Fields>;
};


/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_types" */
export type Post_Types_Aggregate_Order_By = {
  avg?: Maybe<Post_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Types_Max_Order_By>;
  min?: Maybe<Post_Types_Min_Order_By>;
  stddev?: Maybe<Post_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Types_Sum_Order_By>;
  var_pop?: Maybe<Post_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Types_Var_Samp_Order_By>;
  variance?: Maybe<Post_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_types" */
export type Post_Types_Arr_Rel_Insert_Input = {
  data: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Types_Avg_Fields = {
  __typename?: 'post_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_types" */
export type Post_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_types". All fields are combined with a logical 'AND'. */
export type Post_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>;
  _not?: Maybe<Post_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
};

/** unique or primary key constraints on table "post_types" */
export enum Post_Types_Constraint {
  /** unique or primary key constraint */
  PostTypesNameKey = 'post_types_name_key',
  /** unique or primary key constraint */
  PostTypesPkey = 'post_types_pkey'
}

/** input type for incrementing integer column in table "post_types" */
export type Post_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_types" */
export type Post_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Types_Max_Fields = {
  __typename?: 'post_types_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_types" */
export type Post_Types_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Types_Min_Fields = {
  __typename?: 'post_types_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_types" */
export type Post_Types_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_types" */
export type Post_Types_Mutation_Response = {
  __typename?: 'post_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Types>;
};

/** input type for inserting object relation for remote table "post_types" */
export type Post_Types_Obj_Rel_Insert_Input = {
  data: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

/** on conflict condition type for table "post_types" */
export type Post_Types_On_Conflict = {
  constraint: Post_Types_Constraint;
  update_columns: Array<Post_Types_Update_Column>;
  where?: Maybe<Post_Types_Bool_Exp>;
};

/** ordering options when selecting data from "post_types" */
export type Post_Types_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: "post_types" */
export type Post_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_types" */
export enum Post_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "post_types" */
export type Post_Types_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Types_Stddev_Fields = {
  __typename?: 'post_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_types" */
export type Post_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Types_Stddev_Pop_Fields = {
  __typename?: 'post_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_types" */
export type Post_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Types_Stddev_Samp_Fields = {
  __typename?: 'post_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_types" */
export type Post_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Types_Sum_Fields = {
  __typename?: 'post_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_types" */
export type Post_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "post_types" */
export enum Post_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Post_Types_Var_Pop_Fields = {
  __typename?: 'post_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_types" */
export type Post_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Types_Var_Samp_Fields = {
  __typename?: 'post_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_types" */
export type Post_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Types_Variance_Fields = {
  __typename?: 'post_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_types" */
export type Post_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "polkassembly_proposals" */
export type Polkassembly_Proposals = {
  __typename?: 'polkassembly_proposals';
  /** Remote relationship field */
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_synced: Scalars['Boolean'];
  proposal_hash: Scalars['String'];
  proposal_id: Scalars['Int'];
  proposal_type: Scalars['Int'];
  proposer_address: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "polkassembly_proposals" */
export type Polkassembly_ProposalsAuthorArgs = {
  id: Scalars['Int'];
};

/** aggregated selection of "polkassembly_proposals" */
export type Polkassembly_Proposals_Aggregate = {
  __typename?: 'polkassembly_proposals_aggregate';
  aggregate?: Maybe<Polkassembly_Proposals_Aggregate_Fields>;
  nodes: Array<Polkassembly_Proposals>;
};

/** aggregate fields of "polkassembly_proposals" */
export type Polkassembly_Proposals_Aggregate_Fields = {
  __typename?: 'polkassembly_proposals_aggregate_fields';
  avg?: Maybe<Polkassembly_Proposals_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Polkassembly_Proposals_Max_Fields>;
  min?: Maybe<Polkassembly_Proposals_Min_Fields>;
  stddev?: Maybe<Polkassembly_Proposals_Stddev_Fields>;
  stddev_pop?: Maybe<Polkassembly_Proposals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Polkassembly_Proposals_Stddev_Samp_Fields>;
  sum?: Maybe<Polkassembly_Proposals_Sum_Fields>;
  var_pop?: Maybe<Polkassembly_Proposals_Var_Pop_Fields>;
  var_samp?: Maybe<Polkassembly_Proposals_Var_Samp_Fields>;
  variance?: Maybe<Polkassembly_Proposals_Variance_Fields>;
};


/** aggregate fields of "polkassembly_proposals" */
export type Polkassembly_Proposals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Polkassembly_Proposals_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Aggregate_Order_By = {
  avg?: Maybe<Polkassembly_Proposals_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Polkassembly_Proposals_Max_Order_By>;
  min?: Maybe<Polkassembly_Proposals_Min_Order_By>;
  stddev?: Maybe<Polkassembly_Proposals_Stddev_Order_By>;
  stddev_pop?: Maybe<Polkassembly_Proposals_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Polkassembly_Proposals_Stddev_Samp_Order_By>;
  sum?: Maybe<Polkassembly_Proposals_Sum_Order_By>;
  var_pop?: Maybe<Polkassembly_Proposals_Var_Pop_Order_By>;
  var_samp?: Maybe<Polkassembly_Proposals_Var_Samp_Order_By>;
  variance?: Maybe<Polkassembly_Proposals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "polkassembly_proposals" */
export type Polkassembly_Proposals_Arr_Rel_Insert_Input = {
  data: Array<Polkassembly_Proposals_Insert_Input>;
  on_conflict?: Maybe<Polkassembly_Proposals_On_Conflict>;
};

/** aggregate avg on columns */
export type Polkassembly_Proposals_Avg_Fields = {
  __typename?: 'polkassembly_proposals_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "polkassembly_proposals". All fields are combined with a logical 'AND'. */
export type Polkassembly_Proposals_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Polkassembly_Proposals_Bool_Exp>>>;
  _not?: Maybe<Polkassembly_Proposals_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Polkassembly_Proposals_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_synced?: Maybe<Boolean_Comparison_Exp>;
  proposal_hash?: Maybe<String_Comparison_Exp>;
  proposal_id?: Maybe<Int_Comparison_Exp>;
  proposal_type?: Maybe<Int_Comparison_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "polkassembly_proposals" */
export enum Polkassembly_Proposals_Constraint {
  /** unique or primary key constraint */
  PolkassemblyProposalsPkey = 'polkassembly_proposals_pkey',
  /** unique or primary key constraint */
  PolkassemblyProposalsProposalHashKey = 'polkassembly_proposals_proposal_hash_key'
}

/** input type for incrementing integer column in table "polkassembly_proposals" */
export type Polkassembly_Proposals_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  proposal_type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "polkassembly_proposals" */
export type Polkassembly_Proposals_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_synced?: Maybe<Scalars['Boolean']>;
  proposal_hash?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  proposal_type?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Polkassembly_Proposals_Max_Fields = {
  __typename?: 'polkassembly_proposals_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  proposal_hash?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  proposal_type?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_hash?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Polkassembly_Proposals_Min_Fields = {
  __typename?: 'polkassembly_proposals_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  proposal_hash?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  proposal_type?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_hash?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "polkassembly_proposals" */
export type Polkassembly_Proposals_Mutation_Response = {
  __typename?: 'polkassembly_proposals_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Polkassembly_Proposals>;
};

/** input type for inserting object relation for remote table "polkassembly_proposals" */
export type Polkassembly_Proposals_Obj_Rel_Insert_Input = {
  data: Polkassembly_Proposals_Insert_Input;
  on_conflict?: Maybe<Polkassembly_Proposals_On_Conflict>;
};

/** on conflict condition type for table "polkassembly_proposals" */
export type Polkassembly_Proposals_On_Conflict = {
  constraint: Polkassembly_Proposals_Constraint;
  update_columns: Array<Polkassembly_Proposals_Update_Column>;
  where?: Maybe<Polkassembly_Proposals_Bool_Exp>;
};

/** ordering options when selecting data from "polkassembly_proposals" */
export type Polkassembly_Proposals_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_synced?: Maybe<Order_By>;
  proposal_hash?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "polkassembly_proposals" */
export type Polkassembly_Proposals_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "polkassembly_proposals" */
export enum Polkassembly_Proposals_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSynced = 'is_synced',
  /** column name */
  ProposalHash = 'proposal_hash',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "polkassembly_proposals" */
export type Polkassembly_Proposals_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_synced?: Maybe<Scalars['Boolean']>;
  proposal_hash?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  proposal_type?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Polkassembly_Proposals_Stddev_Fields = {
  __typename?: 'polkassembly_proposals_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Polkassembly_Proposals_Stddev_Pop_Fields = {
  __typename?: 'polkassembly_proposals_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Polkassembly_Proposals_Stddev_Samp_Fields = {
  __typename?: 'polkassembly_proposals_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Polkassembly_Proposals_Sum_Fields = {
  __typename?: 'polkassembly_proposals_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  proposal_type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** update columns of table "polkassembly_proposals" */
export enum Polkassembly_Proposals_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSynced = 'is_synced',
  /** column name */
  ProposalHash = 'proposal_hash',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Polkassembly_Proposals_Var_Pop_Fields = {
  __typename?: 'polkassembly_proposals_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Polkassembly_Proposals_Var_Samp_Fields = {
  __typename?: 'polkassembly_proposals_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Polkassembly_Proposals_Variance_Fields = {
  __typename?: 'polkassembly_proposals_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  proposal_type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "polkassembly_proposals" */
export type Polkassembly_Proposals_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
};


/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  /** Remote relationship field */
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  last_update?: Maybe<Post_Last_Update>;
  /** An object relationship */
  onchain_link?: Maybe<Onchain_Links>;
  /** An array relationship */
  option_polls: Array<Option_Poll>;
  /** An aggregated array relationship */
  option_polls_aggregate: Option_Poll_Aggregate;
  /** An array relationship */
  polls: Array<Poll>;
  /** An aggregated array relationship */
  polls_aggregate: Poll_Aggregate;
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregated array relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  title?: Maybe<Scalars['String']>;
  /** An object relationship */
  topic: Post_Topics;
  /** Define the main suject of the post */
  topic_id: Scalars['Int'];
  /** An object relationship */
  type: Post_Types;
  type_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsOption_PollsArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Order_By>>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsOption_Polls_AggregateArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Order_By>>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPollsArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPolls_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
  stddev?: Maybe<Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Posts_Sum_Order_By>;
  var_pop?: Maybe<Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Posts_Var_Samp_Order_By>;
  variance?: Maybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_update?: Maybe<Post_Last_Update_Bool_Exp>;
  onchain_link?: Maybe<Onchain_Links_Bool_Exp>;
  option_polls?: Maybe<Option_Poll_Bool_Exp>;
  polls?: Maybe<Poll_Bool_Exp>;
  post_reactions?: Maybe<Post_Reactions_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  topic?: Maybe<Post_Topics_Bool_Exp>;
  topic_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<Post_Types_Bool_Exp>;
  type_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing integer column in table "posts" */
export type Posts_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_link?: Maybe<Onchain_Links_Obj_Rel_Insert_Input>;
  option_polls?: Maybe<Option_Poll_Arr_Rel_Insert_Input>;
  polls?: Maybe<Poll_Arr_Rel_Insert_Input>;
  post_reactions?: Maybe<Post_Reactions_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Post_Topics_Obj_Rel_Insert_Input>;
  topic_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Post_Types_Obj_Rel_Insert_Input>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
  author_id?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_update?: Maybe<Post_Last_Update_Order_By>;
  onchain_link?: Maybe<Onchain_Links_Order_By>;
  option_polls_aggregate?: Maybe<Option_Poll_Aggregate_Order_By>;
  polls_aggregate?: Maybe<Poll_Aggregate_Order_By>;
  post_reactions_aggregate?: Maybe<Post_Reactions_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  topic?: Maybe<Post_Topics_Order_By>;
  topic_id?: Maybe<Order_By>;
  type?: Maybe<Post_Types_Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  about?: Maybe<About>;
  blockIndex?: Maybe<BlockIndex>;
  blockIndexes: Array<Maybe<BlockIndex>>;
  blockIndexesConnection: BlockIndexConnection;
  blockNumber?: Maybe<BlockNumber>;
  blockNumbers: Array<Maybe<BlockNumber>>;
  blockNumbersConnection: BlockNumberConnection;
  /** fetch data from the table: "blockchain_socials" */
  blockchain_socials: Array<Blockchain_Socials>;
  /** fetch aggregated fields from the table: "blockchain_socials" */
  blockchain_socials_aggregate: Blockchain_Socials_Aggregate;
  /** fetch data from the table: "blockchain_socials" using primary key columns */
  blockchain_socials_by_pk?: Maybe<Blockchain_Socials>;
  bounties: Array<Maybe<Bounty>>;
  bountiesConnection: BountyConnection;
  bounty?: Maybe<Bounty>;
  bountyStatus?: Maybe<BountyStatus>;
  bountyStatuses: Array<Maybe<BountyStatus>>;
  bountyStatusesConnection: BountyStatusConnection;
  /** fetch data from the table: "comment_reactions" */
  comment_reactions: Array<Comment_Reactions>;
  /** fetch aggregated fields from the table: "comment_reactions" */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  council?: Maybe<Council>;
  councilMember?: Maybe<CouncilMember>;
  councilMembers: Array<Maybe<CouncilMember>>;
  councilMembersConnection: CouncilMemberConnection;
  councils: Array<Maybe<Council>>;
  councilsConnection: CouncilConnection;
  era?: Maybe<Era>;
  eras: Array<Maybe<Era>>;
  erasConnection: EraConnection;
  heartBeat?: Maybe<HeartBeat>;
  heartBeats: Array<Maybe<HeartBeat>>;
  heartBeatsConnection: HeartBeatConnection;
  motion?: Maybe<Motion>;
  motionProposalArgument?: Maybe<MotionProposalArgument>;
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>;
  motionProposalArgumentsConnection: MotionProposalArgumentConnection;
  motionStatus?: Maybe<MotionStatus>;
  motionStatuses: Array<Maybe<MotionStatus>>;
  motionStatusesConnection: MotionStatusConnection;
  motions: Array<Maybe<Motion>>;
  motionsConnection: MotionConnection;
  node?: Maybe<Node>;
  nomination?: Maybe<Nomination>;
  nominations: Array<Maybe<Nomination>>;
  nominationsConnection: NominationConnection;
  offlineValidator?: Maybe<OfflineValidator>;
  offlineValidators: Array<Maybe<OfflineValidator>>;
  offlineValidatorsConnection: OfflineValidatorConnection;
  /** fetch data from the table: "onchain_links" */
  onchain_links: Array<Onchain_Links>;
  /** fetch aggregated fields from the table: "onchain_links" */
  onchain_links_aggregate: Onchain_Links_Aggregate;
  /** fetch data from the table: "onchain_links" using primary key columns */
  onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** fetch data from the table: "option_poll" */
  option_poll: Array<Option_Poll>;
  /** fetch aggregated fields from the table: "option_poll" */
  option_poll_aggregate: Option_Poll_Aggregate;
  /** fetch data from the table: "option_poll" using primary key columns */
  option_poll_by_pk?: Maybe<Option_Poll>;
  /** fetch data from the table: "option_poll_votes" */
  option_poll_votes: Array<Option_Poll_Votes>;
  /** fetch aggregated fields from the table: "option_poll_votes" */
  option_poll_votes_aggregate: Option_Poll_Votes_Aggregate;
  /** fetch data from the table: "option_poll_votes" using primary key columns */
  option_poll_votes_by_pk?: Maybe<Option_Poll_Votes>;
  /** fetch data from the table: "polkassembly_proposals" */
  polkassembly_proposals: Array<Polkassembly_Proposals>;
  /** fetch aggregated fields from the table: "polkassembly_proposals" */
  polkassembly_proposals_aggregate: Polkassembly_Proposals_Aggregate;
  /** fetch data from the table: "polkassembly_proposals" using primary key columns */
  polkassembly_proposals_by_pk?: Maybe<Polkassembly_Proposals>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "poll_votes" */
  poll_votes: Array<Poll_Votes>;
  /** fetch aggregated fields from the table: "poll_votes" */
  poll_votes_aggregate: Poll_Votes_Aggregate;
  /** fetch data from the table: "poll_votes" using primary key columns */
  poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** fetch data from the table: "post_last_update" */
  post_last_update: Array<Post_Last_Update>;
  /** fetch aggregated fields from the table: "post_last_update" */
  post_last_update_aggregate: Post_Last_Update_Aggregate;
  /** fetch data from the table: "post_reactions" */
  post_reactions: Array<Post_Reactions>;
  /** fetch aggregated fields from the table: "post_reactions" */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** fetch data from the table: "post_topics" */
  post_topics: Array<Post_Topics>;
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: Post_Topics_Aggregate;
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<Post_Topics>;
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  preimage?: Maybe<Preimage>;
  preimageArgument?: Maybe<PreimageArgument>;
  preimageArguments: Array<Maybe<PreimageArgument>>;
  preimageArgumentsConnection: PreimageArgumentConnection;
  preimageStatus?: Maybe<PreimageStatus>;
  preimageStatuses: Array<Maybe<PreimageStatus>>;
  preimageStatusesConnection: PreimageStatusConnection;
  preimages: Array<Maybe<Preimage>>;
  preimagesConnection: PreimageConnection;
  profile?: Maybe<User>;
  proposal?: Maybe<Proposal>;
  proposalStatus?: Maybe<ProposalStatus>;
  proposalStatuses: Array<Maybe<ProposalStatus>>;
  proposalStatusesConnection: ProposalStatusConnection;
  proposals: Array<Maybe<Proposal>>;
  proposalsConnection: ProposalConnection;
  referendum?: Maybe<Referendum>;
  referendumStatus?: Maybe<ReferendumStatus>;
  referendumStatuses: Array<Maybe<ReferendumStatus>>;
  referendumStatusesConnection: ReferendumStatusConnection;
  referendums: Array<Maybe<Referendum>>;
  referendumsConnection: ReferendumConnection;
  /** fetch data from the table: "replies" */
  replies: Array<Replies>;
  /** fetch aggregated fields from the table: "replies" */
  replies_aggregate: Replies_Aggregate;
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>;
  reward?: Maybe<Reward>;
  rewards: Array<Maybe<Reward>>;
  rewardsConnection: RewardConnection;
  session?: Maybe<Session>;
  sessions: Array<Maybe<Session>>;
  sessionsConnection: SessionConnection;
  slashing?: Maybe<Slashing>;
  slashings: Array<Maybe<Slashing>>;
  slashingsConnection: SlashingConnection;
  stake?: Maybe<Stake>;
  stakes: Array<Maybe<Stake>>;
  stakesConnection: StakeConnection;
  subscription?: Maybe<Subscription>;
  techCommitteeProposal?: Maybe<TechCommitteeProposal>;
  techCommitteeProposalArgument?: Maybe<TechCommitteeProposalArgument>;
  techCommitteeProposalArguments: Array<Maybe<TechCommitteeProposalArgument>>;
  techCommitteeProposalArgumentsConnection: TechCommitteeProposalArgumentConnection;
  techCommitteeProposalStatus?: Maybe<TechCommitteeProposalStatus>;
  techCommitteeProposalStatuses: Array<Maybe<TechCommitteeProposalStatus>>;
  techCommitteeProposalStatusesConnection: TechCommitteeProposalStatusConnection;
  techCommitteeProposals: Array<Maybe<TechCommitteeProposal>>;
  techCommitteeProposalsConnection: TechCommitteeProposalConnection;
  tip?: Maybe<Tip>;
  tipStatus?: Maybe<TipStatus>;
  tipStatuses: Array<Maybe<TipStatus>>;
  tipStatusesConnection: TipStatusConnection;
  tips: Array<Maybe<Tip>>;
  tipsConnection: TipConnection;
  token?: Maybe<Token>;
  totalIssuance?: Maybe<TotalIssuance>;
  totalIssuances: Array<Maybe<TotalIssuance>>;
  totalIssuancesConnection: TotalIssuanceConnection;
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>;
  treasurySpendProposalsConnection: TreasurySpendProposalConnection;
  treasuryStatus?: Maybe<TreasuryStatus>;
  treasuryStatuses: Array<Maybe<TreasuryStatus>>;
  treasuryStatusesConnection: TreasuryStatusConnection;
  user?: Maybe<User>;
  validator?: Maybe<Validator>;
  validators: Array<Maybe<Validator>>;
  validatorsConnection: ValidatorConnection;
};


/** query root */
export type Query_RootAboutArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


/** query root */
export type Query_RootBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput;
};


/** query root */
export type Query_RootBlockIndexesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockIndexWhereInput>;
};


/** query root */
export type Query_RootBlockIndexesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockIndexWhereInput>;
};


/** query root */
export type Query_RootBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


/** query root */
export type Query_RootBlockNumbersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockNumberWhereInput>;
};


/** query root */
export type Query_RootBlockNumbersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockNumberWhereInput>;
};


/** query root */
export type Query_RootBlockchain_SocialsArgs = {
  distinct_on?: Maybe<Array<Blockchain_Socials_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blockchain_Socials_Order_By>>;
  where?: Maybe<Blockchain_Socials_Bool_Exp>;
};


/** query root */
export type Query_RootBlockchain_Socials_AggregateArgs = {
  distinct_on?: Maybe<Array<Blockchain_Socials_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blockchain_Socials_Order_By>>;
  where?: Maybe<Blockchain_Socials_Bool_Exp>;
};


/** query root */
export type Query_RootBlockchain_Socials_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBountiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyWhereInput>;
};


/** query root */
export type Query_RootBountiesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyWhereInput>;
};


/** query root */
export type Query_RootBountyArgs = {
  where: BountyWhereUniqueInput;
};


/** query root */
export type Query_RootBountyStatusArgs = {
  where: BountyStatusWhereUniqueInput;
};


/** query root */
export type Query_RootBountyStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyStatusWhereInput>;
};


/** query root */
export type Query_RootBountyStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyStatusWhereInput>;
};


/** query root */
export type Query_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootCouncilArgs = {
  where: CouncilWhereUniqueInput;
};


/** query root */
export type Query_RootCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
};


/** query root */
export type Query_RootCouncilMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};


/** query root */
export type Query_RootCouncilMembersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};


/** query root */
export type Query_RootCouncilsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};


/** query root */
export type Query_RootCouncilsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};


/** query root */
export type Query_RootEraArgs = {
  where: EraWhereUniqueInput;
};


/** query root */
export type Query_RootErasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EraWhereInput>;
};


/** query root */
export type Query_RootErasConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EraWhereInput>;
};


/** query root */
export type Query_RootHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput;
};


/** query root */
export type Query_RootHeartBeatsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeartBeatWhereInput>;
};


/** query root */
export type Query_RootHeartBeatsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeartBeatWhereInput>;
};


/** query root */
export type Query_RootMotionArgs = {
  where: MotionWhereUniqueInput;
};


/** query root */
export type Query_RootMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
};


/** query root */
export type Query_RootMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


/** query root */
export type Query_RootMotionProposalArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


/** query root */
export type Query_RootMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
};


/** query root */
export type Query_RootMotionStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};


/** query root */
export type Query_RootMotionStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};


/** query root */
export type Query_RootMotionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput>;
};


/** query root */
export type Query_RootMotionsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput>;
};


/** query root */
export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};


/** query root */
export type Query_RootNominationArgs = {
  where: NominationWhereUniqueInput;
};


/** query root */
export type Query_RootNominationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NominationWhereInput>;
};


/** query root */
export type Query_RootNominationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NominationWhereInput>;
};


/** query root */
export type Query_RootOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput;
};


/** query root */
export type Query_RootOfflineValidatorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OfflineValidatorWhereInput>;
};


/** query root */
export type Query_RootOfflineValidatorsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OfflineValidatorWhereInput>;
};


/** query root */
export type Query_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** query root */
export type Query_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** query root */
export type Query_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOption_PollArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Order_By>>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};


/** query root */
export type Query_RootOption_Poll_AggregateArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Order_By>>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};


/** query root */
export type Query_RootOption_Poll_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOption_Poll_VotesArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Votes_Order_By>>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootOption_Poll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Votes_Order_By>>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootOption_Poll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPolkassembly_ProposalsArgs = {
  distinct_on?: Maybe<Array<Polkassembly_Proposals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polkassembly_Proposals_Order_By>>;
  where?: Maybe<Polkassembly_Proposals_Bool_Exp>;
};


/** query root */
export type Query_RootPolkassembly_Proposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Polkassembly_Proposals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polkassembly_Proposals_Order_By>>;
  where?: Maybe<Polkassembly_Proposals_Bool_Exp>;
};


/** query root */
export type Query_RootPolkassembly_Proposals_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPoll_VotesArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_Last_UpdateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Last_Update_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** query root */
export type Query_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPreimageArgs = {
  where: PreimageWhereUniqueInput;
};


/** query root */
export type Query_RootPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
};


/** query root */
export type Query_RootPreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


/** query root */
export type Query_RootPreimageArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


/** query root */
export type Query_RootPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
};


/** query root */
export type Query_RootPreimageStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
};


/** query root */
export type Query_RootPreimageStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
};


/** query root */
export type Query_RootPreimagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageWhereInput>;
};


/** query root */
export type Query_RootPreimagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageWhereInput>;
};


/** query root */
export type Query_RootProfileArgs = {
  username: Scalars['String'];
};


/** query root */
export type Query_RootProposalArgs = {
  where: ProposalWhereUniqueInput;
};


/** query root */
export type Query_RootProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
};


/** query root */
export type Query_RootProposalStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};


/** query root */
export type Query_RootProposalStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};


/** query root */
export type Query_RootProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput>;
};


/** query root */
export type Query_RootProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput>;
};


/** query root */
export type Query_RootReferendumArgs = {
  where: ReferendumWhereUniqueInput;
};


/** query root */
export type Query_RootReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
};


/** query root */
export type Query_RootReferendumStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};


/** query root */
export type Query_RootReferendumStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};


/** query root */
export type Query_RootReferendumsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput>;
};


/** query root */
export type Query_RootReferendumsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput>;
};


/** query root */
export type Query_RootRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replies_Order_By>>;
  where?: Maybe<Replies_Bool_Exp>;
};


/** query root */
export type Query_RootReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replies_Order_By>>;
  where?: Maybe<Replies_Bool_Exp>;
};


/** query root */
export type Query_RootReplies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRewardArgs = {
  where: RewardWhereUniqueInput;
};


/** query root */
export type Query_RootRewardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RewardWhereInput>;
};


/** query root */
export type Query_RootRewardsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RewardWhereInput>;
};


/** query root */
export type Query_RootSessionArgs = {
  where: SessionWhereUniqueInput;
};


/** query root */
export type Query_RootSessionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


/** query root */
export type Query_RootSessionsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


/** query root */
export type Query_RootSlashingArgs = {
  where: SlashingWhereUniqueInput;
};


/** query root */
export type Query_RootSlashingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SlashingWhereInput>;
};


/** query root */
export type Query_RootSlashingsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SlashingWhereInput>;
};


/** query root */
export type Query_RootStakeArgs = {
  where: StakeWhereUniqueInput;
};


/** query root */
export type Query_RootStakesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<StakeWhereInput>;
};


/** query root */
export type Query_RootStakesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<StakeWhereInput>;
};


/** query root */
export type Query_RootSubscriptionArgs = {
  post_id: Scalars['Int'];
};


/** query root */
export type Query_RootTechCommitteeProposalArgs = {
  where: TechCommitteeProposalWhereUniqueInput;
};


/** query root */
export type Query_RootTechCommitteeProposalArgumentArgs = {
  where: TechCommitteeProposalArgumentWhereUniqueInput;
};


/** query root */
export type Query_RootTechCommitteeProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalArgumentWhereInput>;
};


/** query root */
export type Query_RootTechCommitteeProposalArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalArgumentWhereInput>;
};


/** query root */
export type Query_RootTechCommitteeProposalStatusArgs = {
  where: TechCommitteeProposalStatusWhereUniqueInput;
};


/** query root */
export type Query_RootTechCommitteeProposalStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalStatusWhereInput>;
};


/** query root */
export type Query_RootTechCommitteeProposalStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalStatusWhereInput>;
};


/** query root */
export type Query_RootTechCommitteeProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalWhereInput>;
};


/** query root */
export type Query_RootTechCommitteeProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TechCommitteeProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCommitteeProposalWhereInput>;
};


/** query root */
export type Query_RootTipArgs = {
  where: TipWhereUniqueInput;
};


/** query root */
export type Query_RootTipStatusArgs = {
  where: TipStatusWhereUniqueInput;
};


/** query root */
export type Query_RootTipStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipStatusWhereInput>;
};


/** query root */
export type Query_RootTipStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipStatusWhereInput>;
};


/** query root */
export type Query_RootTipsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipWhereInput>;
};


/** query root */
export type Query_RootTipsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipWhereInput>;
};


/** query root */
export type Query_RootTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


/** query root */
export type Query_RootTotalIssuancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TotalIssuanceWhereInput>;
};


/** query root */
export type Query_RootTotalIssuancesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TotalIssuanceWhereInput>;
};


/** query root */
export type Query_RootTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
};


/** query root */
export type Query_RootTreasurySpendProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


/** query root */
export type Query_RootTreasurySpendProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


/** query root */
export type Query_RootTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
};


/** query root */
export type Query_RootTreasuryStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};


/** query root */
export type Query_RootTreasuryStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


/** query root */
export type Query_RootValidatorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ValidatorWhereInput>;
};


/** query root */
export type Query_RootValidatorsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ValidatorWhereInput>;
};

/** columns and relationships of "replies" */
export type Replies = {
  __typename?: 'replies';
  /** Remote relationship field */
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid'];
  content: Scalars['String'];
  created_at: Scalars['timestamp'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "replies" */
export type Replies_Aggregate = {
  __typename?: 'replies_aggregate';
  aggregate?: Maybe<Replies_Aggregate_Fields>;
  nodes: Array<Replies>;
};

/** aggregate fields of "replies" */
export type Replies_Aggregate_Fields = {
  __typename?: 'replies_aggregate_fields';
  avg?: Maybe<Replies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Replies_Max_Fields>;
  min?: Maybe<Replies_Min_Fields>;
  stddev?: Maybe<Replies_Stddev_Fields>;
  stddev_pop?: Maybe<Replies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Replies_Stddev_Samp_Fields>;
  sum?: Maybe<Replies_Sum_Fields>;
  var_pop?: Maybe<Replies_Var_Pop_Fields>;
  var_samp?: Maybe<Replies_Var_Samp_Fields>;
  variance?: Maybe<Replies_Variance_Fields>;
};


/** aggregate fields of "replies" */
export type Replies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Replies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "replies" */
export type Replies_Aggregate_Order_By = {
  avg?: Maybe<Replies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Replies_Max_Order_By>;
  min?: Maybe<Replies_Min_Order_By>;
  stddev?: Maybe<Replies_Stddev_Order_By>;
  stddev_pop?: Maybe<Replies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Replies_Stddev_Samp_Order_By>;
  sum?: Maybe<Replies_Sum_Order_By>;
  var_pop?: Maybe<Replies_Var_Pop_Order_By>;
  var_samp?: Maybe<Replies_Var_Samp_Order_By>;
  variance?: Maybe<Replies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "replies" */
export type Replies_Arr_Rel_Insert_Input = {
  data: Array<Replies_Insert_Input>;
  on_conflict?: Maybe<Replies_On_Conflict>;
};

/** aggregate avg on columns */
export type Replies_Avg_Fields = {
  __typename?: 'replies_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "replies" */
export type Replies_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "replies". All fields are combined with a logical 'AND'. */
export type Replies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Replies_Bool_Exp>>>;
  _not?: Maybe<Replies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Replies_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  comment?: Maybe<Comments_Bool_Exp>;
  comment_id?: Maybe<Uuid_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "replies" */
export enum Replies_Constraint {
  /** unique or primary key constraint */
  RepliesPkey = 'replies_pkey'
}

/** input type for incrementing integer column in table "replies" */
export type Replies_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "replies" */
export type Replies_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Replies_Max_Fields = {
  __typename?: 'replies_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "replies" */
export type Replies_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Replies_Min_Fields = {
  __typename?: 'replies_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "replies" */
export type Replies_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "replies" */
export type Replies_Mutation_Response = {
  __typename?: 'replies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Replies>;
};

/** input type for inserting object relation for remote table "replies" */
export type Replies_Obj_Rel_Insert_Input = {
  data: Replies_Insert_Input;
  on_conflict?: Maybe<Replies_On_Conflict>;
};

/** on conflict condition type for table "replies" */
export type Replies_On_Conflict = {
  constraint: Replies_Constraint;
  update_columns: Array<Replies_Update_Column>;
  where?: Maybe<Replies_Bool_Exp>;
};

/** ordering options when selecting data from "replies" */
export type Replies_Order_By = {
  author_id?: Maybe<Order_By>;
  comment?: Maybe<Comments_Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "replies" */
export type Replies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "replies" */
export enum Replies_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "replies" */
export type Replies_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Replies_Stddev_Fields = {
  __typename?: 'replies_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "replies" */
export type Replies_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Replies_Stddev_Pop_Fields = {
  __typename?: 'replies_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "replies" */
export type Replies_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Replies_Stddev_Samp_Fields = {
  __typename?: 'replies_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "replies" */
export type Replies_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Replies_Sum_Fields = {
  __typename?: 'replies_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "replies" */
export type Replies_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** update columns of table "replies" */
export enum Replies_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Replies_Var_Pop_Fields = {
  __typename?: 'replies_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "replies" */
export type Replies_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Replies_Var_Samp_Fields = {
  __typename?: 'replies_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "replies" */
export type Replies_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Replies_Variance_Fields = {
  __typename?: 'replies_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "replies" */
export type Replies_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  blockIndex?: Maybe<BlockIndexSubscriptionPayload>;
  blockNumber?: Maybe<BlockNumberSubscriptionPayload>;
  /** fetch data from the table: "blockchain_socials" */
  blockchain_socials: Array<Blockchain_Socials>;
  /** fetch aggregated fields from the table: "blockchain_socials" */
  blockchain_socials_aggregate: Blockchain_Socials_Aggregate;
  /** fetch data from the table: "blockchain_socials" using primary key columns */
  blockchain_socials_by_pk?: Maybe<Blockchain_Socials>;
  bounty?: Maybe<BountySubscriptionPayload>;
  bountyStatus?: Maybe<BountyStatusSubscriptionPayload>;
  /** fetch data from the table: "comment_reactions" */
  comment_reactions: Array<Comment_Reactions>;
  /** fetch aggregated fields from the table: "comment_reactions" */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  council?: Maybe<CouncilSubscriptionPayload>;
  councilMember?: Maybe<CouncilMemberSubscriptionPayload>;
  era?: Maybe<EraSubscriptionPayload>;
  heartBeat?: Maybe<HeartBeatSubscriptionPayload>;
  motion?: Maybe<MotionSubscriptionPayload>;
  motionProposalArgument?: Maybe<MotionProposalArgumentSubscriptionPayload>;
  motionStatus?: Maybe<MotionStatusSubscriptionPayload>;
  nomination?: Maybe<NominationSubscriptionPayload>;
  offlineValidator?: Maybe<OfflineValidatorSubscriptionPayload>;
  /** fetch data from the table: "onchain_links" */
  onchain_links: Array<Onchain_Links>;
  /** fetch aggregated fields from the table: "onchain_links" */
  onchain_links_aggregate: Onchain_Links_Aggregate;
  /** fetch data from the table: "onchain_links" using primary key columns */
  onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** fetch data from the table: "option_poll" */
  option_poll: Array<Option_Poll>;
  /** fetch aggregated fields from the table: "option_poll" */
  option_poll_aggregate: Option_Poll_Aggregate;
  /** fetch data from the table: "option_poll" using primary key columns */
  option_poll_by_pk?: Maybe<Option_Poll>;
  /** fetch data from the table: "option_poll_votes" */
  option_poll_votes: Array<Option_Poll_Votes>;
  /** fetch aggregated fields from the table: "option_poll_votes" */
  option_poll_votes_aggregate: Option_Poll_Votes_Aggregate;
  /** fetch data from the table: "option_poll_votes" using primary key columns */
  option_poll_votes_by_pk?: Maybe<Option_Poll_Votes>;
  /** fetch data from the table: "polkassembly_proposals" */
  polkassembly_proposals: Array<Polkassembly_Proposals>;
  /** fetch aggregated fields from the table: "polkassembly_proposals" */
  polkassembly_proposals_aggregate: Polkassembly_Proposals_Aggregate;
  /** fetch data from the table: "polkassembly_proposals" using primary key columns */
  polkassembly_proposals_by_pk?: Maybe<Polkassembly_Proposals>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "poll_votes" */
  poll_votes: Array<Poll_Votes>;
  /** fetch aggregated fields from the table: "poll_votes" */
  poll_votes_aggregate: Poll_Votes_Aggregate;
  /** fetch data from the table: "poll_votes" using primary key columns */
  poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** fetch data from the table: "post_last_update" */
  post_last_update: Array<Post_Last_Update>;
  /** fetch aggregated fields from the table: "post_last_update" */
  post_last_update_aggregate: Post_Last_Update_Aggregate;
  /** fetch data from the table: "post_reactions" */
  post_reactions: Array<Post_Reactions>;
  /** fetch aggregated fields from the table: "post_reactions" */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** fetch data from the table: "post_topics" */
  post_topics: Array<Post_Topics>;
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: Post_Topics_Aggregate;
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<Post_Topics>;
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  preimage?: Maybe<PreimageSubscriptionPayload>;
  preimageArgument?: Maybe<PreimageArgumentSubscriptionPayload>;
  preimageStatus?: Maybe<PreimageStatusSubscriptionPayload>;
  proposal?: Maybe<ProposalSubscriptionPayload>;
  proposalStatus?: Maybe<ProposalStatusSubscriptionPayload>;
  referendum?: Maybe<ReferendumSubscriptionPayload>;
  referendumStatus?: Maybe<ReferendumStatusSubscriptionPayload>;
  /** fetch data from the table: "replies" */
  replies: Array<Replies>;
  /** fetch aggregated fields from the table: "replies" */
  replies_aggregate: Replies_Aggregate;
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>;
  reward?: Maybe<RewardSubscriptionPayload>;
  session?: Maybe<SessionSubscriptionPayload>;
  slashing?: Maybe<SlashingSubscriptionPayload>;
  stake?: Maybe<StakeSubscriptionPayload>;
  subscribed?: Maybe<Scalars['Boolean']>;
  techCommitteeProposal?: Maybe<TechCommitteeProposalSubscriptionPayload>;
  techCommitteeProposalArgument?: Maybe<TechCommitteeProposalArgumentSubscriptionPayload>;
  techCommitteeProposalStatus?: Maybe<TechCommitteeProposalStatusSubscriptionPayload>;
  tip?: Maybe<TipSubscriptionPayload>;
  tipStatus?: Maybe<TipStatusSubscriptionPayload>;
  totalIssuance?: Maybe<TotalIssuanceSubscriptionPayload>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalSubscriptionPayload>;
  treasuryStatus?: Maybe<TreasuryStatusSubscriptionPayload>;
  validator?: Maybe<ValidatorSubscriptionPayload>;
};


/** subscription root */
export type Subscription_RootBlockIndexArgs = {
  where?: Maybe<BlockIndexSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootBlockNumberArgs = {
  where?: Maybe<BlockNumberSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootBlockchain_SocialsArgs = {
  distinct_on?: Maybe<Array<Blockchain_Socials_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blockchain_Socials_Order_By>>;
  where?: Maybe<Blockchain_Socials_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlockchain_Socials_AggregateArgs = {
  distinct_on?: Maybe<Array<Blockchain_Socials_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blockchain_Socials_Order_By>>;
  where?: Maybe<Blockchain_Socials_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlockchain_Socials_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBountyArgs = {
  where?: Maybe<BountySubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootBountyStatusArgs = {
  where?: Maybe<BountyStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCouncilArgs = {
  where?: Maybe<CouncilSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootCouncilMemberArgs = {
  where?: Maybe<CouncilMemberSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootEraArgs = {
  where?: Maybe<EraSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootHeartBeatArgs = {
  where?: Maybe<HeartBeatSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootMotionArgs = {
  where?: Maybe<MotionSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootMotionProposalArgumentArgs = {
  where?: Maybe<MotionProposalArgumentSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootMotionStatusArgs = {
  where?: Maybe<MotionStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootNominationArgs = {
  where?: Maybe<NominationSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootOfflineValidatorArgs = {
  where?: Maybe<OfflineValidatorSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOption_PollArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Order_By>>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOption_Poll_AggregateArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Order_By>>;
  where?: Maybe<Option_Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOption_Poll_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOption_Poll_VotesArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Votes_Order_By>>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOption_Poll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Option_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Option_Poll_Votes_Order_By>>;
  where?: Maybe<Option_Poll_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOption_Poll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPolkassembly_ProposalsArgs = {
  distinct_on?: Maybe<Array<Polkassembly_Proposals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polkassembly_Proposals_Order_By>>;
  where?: Maybe<Polkassembly_Proposals_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPolkassembly_Proposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Polkassembly_Proposals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polkassembly_Proposals_Order_By>>;
  where?: Maybe<Polkassembly_Proposals_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPolkassembly_Proposals_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPoll_VotesArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_Last_UpdateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Last_Update_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPreimageArgs = {
  where?: Maybe<PreimageSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootPreimageArgumentArgs = {
  where?: Maybe<PreimageArgumentSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootPreimageStatusArgs = {
  where?: Maybe<PreimageStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootProposalArgs = {
  where?: Maybe<ProposalSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootProposalStatusArgs = {
  where?: Maybe<ProposalStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootReferendumArgs = {
  where?: Maybe<ReferendumSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootReferendumStatusArgs = {
  where?: Maybe<ReferendumStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replies_Order_By>>;
  where?: Maybe<Replies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replies_Order_By>>;
  where?: Maybe<Replies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReplies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRewardArgs = {
  where?: Maybe<RewardSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootSessionArgs = {
  where?: Maybe<SessionSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootSlashingArgs = {
  where?: Maybe<SlashingSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootStakeArgs = {
  where?: Maybe<StakeSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTechCommitteeProposalArgs = {
  where?: Maybe<TechCommitteeProposalSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTechCommitteeProposalArgumentArgs = {
  where?: Maybe<TechCommitteeProposalArgumentSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTechCommitteeProposalStatusArgs = {
  where?: Maybe<TechCommitteeProposalStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTipArgs = {
  where?: Maybe<TipSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTipStatusArgs = {
  where?: Maybe<TipStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTotalIssuanceArgs = {
  where?: Maybe<TotalIssuanceSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTreasurySpendProposalArgs = {
  where?: Maybe<TreasurySpendProposalSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTreasuryStatusArgs = {
  where?: Maybe<TreasuryStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootValidatorArgs = {
  where?: Maybe<ValidatorSubscriptionWhereInput>;
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type EditCommentMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['String'];
}>;


export type EditCommentMutation = (
  { __typename?: 'mutation_root' }
  & { update_comments?: Maybe<(
    { __typename?: 'comments_mutation_response' }
    & Pick<Comments_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCommentMutation = (
  { __typename?: 'mutation_root' }
  & { delete_comments?: Maybe<(
    { __typename?: 'comments_mutation_response' }
    & Pick<Comments_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddCommentReplyMutationVariables = Exact<{
  authorId: Scalars['Int'];
  content: Scalars['String'];
  commentId: Scalars['uuid'];
}>;


export type AddCommentReplyMutation = (
  { __typename: 'mutation_root' }
  & { insert_replies?: Maybe<(
    { __typename?: 'replies_mutation_response' }
    & Pick<Replies_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddPolkassemblyProposalMutationVariables = Exact<{
  authorId: Scalars['Int'];
  proposalId: Scalars['Int'];
  proposalType: Scalars['Int'];
  proposalHash: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  proposerAddress: Scalars['String'];
}>;


export type AddPolkassemblyProposalMutation = (
  { __typename: 'mutation_root' }
  & { insert_polkassembly_proposals?: Maybe<(
    { __typename?: 'polkassembly_proposals_mutation_response' }
    & Pick<Polkassembly_Proposals_Mutation_Response, 'affected_rows'>
  )> }
);

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'mutation_root' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type AddressLoginStartMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type AddressLoginStartMutation = (
  { __typename?: 'mutation_root' }
  & { addressLoginStart?: Maybe<(
    { __typename?: 'AddressLoginType' }
    & Pick<AddressLoginType, 'message' | 'signMessage'>
  )> }
);

export type AddressLoginMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type AddressLoginMutation = (
  { __typename?: 'mutation_root' }
  & { addressLogin?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'mutation_root' }
  & { logout?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type FetchLatestBlockNumberQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchLatestBlockNumberQuery = (
  { __typename?: 'query_root' }
  & { blockNumbers: Array<Maybe<(
    { __typename?: 'BlockNumber' }
    & Pick<BlockNumber, 'number'>
  )>> }
);

export type CreateOptionPollMutationVariables = Exact<{
  postId: Scalars['Int'];
  question: Scalars['String'];
  options: Scalars['String'];
  endAt: Scalars['Int'];
}>;


export type CreateOptionPollMutation = (
  { __typename: 'mutation_root' }
  & { insert_option_poll?: Maybe<(
    { __typename?: 'option_poll_mutation_response' }
    & Pick<Option_Poll_Mutation_Response, 'affected_rows'>
  )> }
);

export type OptionPollFieldsFragment = (
  { __typename?: 'option_poll' }
  & Pick<Option_Poll, 'id' | 'post_id' | 'question' | 'options' | 'end_at' | 'created_at' | 'updated_at'>
);

export type OptionPollQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type OptionPollQuery = (
  { __typename?: 'query_root' }
  & { option_poll: Array<(
    { __typename?: 'option_poll' }
    & OptionPollFieldsFragment
  )> }
);

export type OptionPollVotesFieldsFragment = (
  { __typename?: 'option_poll_votes' }
  & Pick<Option_Poll_Votes, 'id' | 'option' | 'created_at' | 'updated_at'>
  & { option_poll_voter?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type OptionPollVotesQueryVariables = Exact<{
  optionPollId: Scalars['Int'];
}>;


export type OptionPollVotesQuery = (
  { __typename?: 'query_root' }
  & { option_poll_votes: Array<(
    { __typename?: 'option_poll_votes' }
    & OptionPollVotesFieldsFragment
  )> }
);

export type AddOptionPollVoteMutationVariables = Exact<{
  optionPollId: Scalars['Int'];
  userId: Scalars['Int'];
  option: Scalars['String'];
}>;


export type AddOptionPollVoteMutation = (
  { __typename: 'mutation_root' }
  & { insert_option_poll_votes_one?: Maybe<(
    { __typename?: 'option_poll_votes' }
    & Pick<Option_Poll_Votes, 'id'>
  )> }
);

export type DeleteOptionPollVoteMutationVariables = Exact<{
  optionPollId: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type DeleteOptionPollVoteMutation = (
  { __typename?: 'mutation_root' }
  & { delete_option_poll_votes?: Maybe<(
    { __typename?: 'option_poll_votes_mutation_response' }
    & Pick<Option_Poll_Votes_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetCouncilMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCouncilMembersQuery = (
  { __typename?: 'query_root' }
  & { councils: Array<Maybe<(
    { __typename?: 'Council' }
    & { members?: Maybe<Array<(
      { __typename?: 'CouncilMember' }
      & Pick<CouncilMember, 'id' | 'address'>
    )>> }
  )>> }
);

export type PollFieldsFragment = (
  { __typename?: 'poll' }
  & Pick<Poll, 'id' | 'block_end' | 'created_at' | 'updated_at'>
);

export type PollQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PollQuery = (
  { __typename?: 'query_root' }
  & { poll: Array<(
    { __typename?: 'poll' }
    & PollFieldsFragment
  )> }
);

export type PollVotesFieldsFragment = (
  { __typename?: 'poll_votes' }
  & Pick<Poll_Votes, 'id' | 'vote' | 'created_at' | 'updated_at'>
  & { voter?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'kusama_default_address' | 'polkadot_default_address'>
  )> }
);

export type PollVotesQueryVariables = Exact<{
  pollId: Scalars['Int'];
}>;


export type PollVotesQuery = (
  { __typename?: 'query_root' }
  & { poll_votes: Array<(
    { __typename?: 'poll_votes' }
    & PollVotesFieldsFragment
  )> }
);

export type AddPollVoteMutationVariables = Exact<{
  pollId: Scalars['Int'];
  userId: Scalars['Int'];
  vote: Scalars['bpchar'];
}>;


export type AddPollVoteMutation = (
  { __typename: 'mutation_root' }
  & { insert_poll_votes_one?: Maybe<(
    { __typename?: 'poll_votes' }
    & Pick<Poll_Votes, 'id'>
  )> }
);

export type DeleteVoteMutationVariables = Exact<{
  pollId: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type DeleteVoteMutation = (
  { __typename?: 'mutation_root' }
  & { delete_poll_votes?: Maybe<(
    { __typename?: 'poll_votes_mutation_response' }
    & Pick<Poll_Votes_Mutation_Response, 'affected_rows'>
  )> }
);

export type CouncilAtBlockNumberQueryVariables = Exact<{
  blockNumber: Scalars['Int'];
}>;


export type CouncilAtBlockNumberQuery = (
  { __typename?: 'query_root' }
  & { councils: Array<Maybe<(
    { __typename?: 'Council' }
    & { members?: Maybe<Array<(
      { __typename?: 'CouncilMember' }
      & Pick<CouncilMember, 'address'>
    )>> }
  )>> }
);

export type EditPollMutationVariables = Exact<{
  id: Scalars['Int'];
  blockEnd: Scalars['Int'];
}>;


export type EditPollMutation = (
  { __typename?: 'mutation_root' }
  & { update_poll?: Maybe<(
    { __typename?: 'poll_mutation_response' }
    & Pick<Poll_Mutation_Response, 'affected_rows'>
  )> }
);

export type EditPostMutationVariables = Exact<{
  id: Scalars['Int'];
  content: Scalars['String'];
  title: Scalars['String'];
}>;


export type EditPostMutation = (
  { __typename?: 'mutation_root' }
  & { update_posts?: Maybe<(
    { __typename?: 'posts_mutation_response' }
    & Pick<Posts_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddPostCommentMutationVariables = Exact<{
  authorId: Scalars['Int'];
  content: Scalars['String'];
  postId: Scalars['Int'];
}>;


export type AddPostCommentMutation = (
  { __typename: 'mutation_root' }
  & { insert_comments?: Maybe<(
    { __typename?: 'comments_mutation_response' }
    & Pick<Comments_Mutation_Response, 'affected_rows'>
  )> }
);

export type EditCommentReplyMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['String'];
}>;


export type EditCommentReplyMutation = (
  { __typename?: 'mutation_root' }
  & { update_replies?: Maybe<(
    { __typename?: 'replies_mutation_response' }
    & Pick<Replies_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteCommentReplyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCommentReplyMutation = (
  { __typename?: 'mutation_root' }
  & { delete_replies?: Maybe<(
    { __typename?: 'replies_mutation_response' }
    & Pick<Replies_Mutation_Response, 'affected_rows'>
  )> }
);

export type PostReactionFieldsFragment = (
  { __typename?: 'post_reactions' }
  & Pick<Post_Reactions, 'id' | 'reaction' | 'created_at' | 'updated_at'>
  & { reacting_user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type PostReactionsQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostReactionsQuery = (
  { __typename?: 'query_root' }
  & { post_reactions: Array<(
    { __typename?: 'post_reactions' }
    & PostReactionFieldsFragment
  )> }
);

export type CommentReactionFieldsFragment = (
  { __typename?: 'comment_reactions' }
  & Pick<Comment_Reactions, 'id' | 'reaction' | 'created_at' | 'updated_at'>
  & { reacting_user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type CommentReactionsQueryVariables = Exact<{
  commentId: Scalars['uuid'];
}>;


export type CommentReactionsQuery = (
  { __typename?: 'query_root' }
  & { comment_reactions: Array<(
    { __typename?: 'comment_reactions' }
    & CommentReactionFieldsFragment
  )> }
);

export type AddPostReactionMutationVariables = Exact<{
  postId: Scalars['Int'];
  userId: Scalars['Int'];
  reaction: Scalars['bpchar'];
}>;


export type AddPostReactionMutation = (
  { __typename: 'mutation_root' }
  & { insert_post_reactions?: Maybe<(
    { __typename?: 'post_reactions_mutation_response' }
    & Pick<Post_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddCommentReactionMutationVariables = Exact<{
  commentId: Scalars['uuid'];
  userId: Scalars['Int'];
  reaction: Scalars['bpchar'];
}>;


export type AddCommentReactionMutation = (
  { __typename: 'mutation_root' }
  & { insert_comment_reactions?: Maybe<(
    { __typename?: 'comment_reactions_mutation_response' }
    & Pick<Comment_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeletePostReactionMutationVariables = Exact<{
  postId: Scalars['Int'];
  userId: Scalars['Int'];
  reaction: Scalars['bpchar'];
}>;


export type DeletePostReactionMutation = (
  { __typename?: 'mutation_root' }
  & { delete_post_reactions?: Maybe<(
    { __typename?: 'post_reactions_mutation_response' }
    & Pick<Post_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteCommentReactionMutationVariables = Exact<{
  commentId: Scalars['uuid'];
  userId: Scalars['Int'];
  reaction: Scalars['bpchar'];
}>;


export type DeleteCommentReactionMutation = (
  { __typename?: 'mutation_root' }
  & { delete_comment_reactions?: Maybe<(
    { __typename?: 'comment_reactions_mutation_response' }
    & Pick<Comment_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type ReportContentMutationVariables = Exact<{
  network: Scalars['String'];
  type: Scalars['String'];
  content_id: Scalars['String'];
  reason: Scalars['String'];
  comments: Scalars['String'];
}>;


export type ReportContentMutation = (
  { __typename?: 'mutation_root' }
  & { reportContent?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'mutation_root' }
  & { signup?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type AddressSignupStartMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type AddressSignupStartMutation = (
  { __typename?: 'mutation_root' }
  & { addressSignupStart?: Maybe<(
    { __typename?: 'AddressLoginType' }
    & Pick<AddressLoginType, 'message' | 'signMessage'>
  )> }
);

export type AddressSignupConfirmMutationVariables = Exact<{
  network: Scalars['String'];
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type AddressSignupConfirmMutation = (
  { __typename?: 'mutation_root' }
  & { addressSignupConfirm?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type PostSubscribeMutationVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostSubscribeMutation = (
  { __typename?: 'mutation_root' }
  & { postSubscribe?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type PostUnsubscribeMutationVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostUnsubscribeMutation = (
  { __typename?: 'mutation_root' }
  & { postUnsubscribe?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type SubscriptionQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type SubscriptionQuery = (
  { __typename?: 'query_root' }
  & { subscription?: Maybe<(
    { __typename?: 'Subscription' }
    & Pick<Subscription, 'subscribed'>
  )> }
);

export type Get_Refresh_TokenQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Refresh_TokenQuery = (
  { __typename?: 'query_root' }
  & { token?: Maybe<(
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  )> }
);

export type AuthorFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'kusama_default_address' | 'polkadot_default_address' | 'username'>
);

export type ReplyFieldsFragment = (
  { __typename?: 'replies' }
  & Pick<Replies, 'id' | 'comment_id' | 'content' | 'created_at' | 'updated_at'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )> }
);

export type CommentFieldsFragment = (
  { __typename?: 'comments' }
  & Pick<Comments, 'id' | 'content' | 'created_at' | 'updated_at'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, replies: Array<(
    { __typename?: 'replies' }
    & ReplyFieldsFragment
  )> }
);

export type OnchainLinkBountyFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_bounty_id'>
  & { onchain_bounty: Array<Maybe<(
    { __typename?: 'Bounty' }
    & Pick<Bounty, 'id' | 'proposer' | 'value' | 'fee' | 'curatorDeposit' | 'bond' | 'bountyId' | 'curator' | 'beneficiary'>
    & { bountyStatus?: Maybe<Array<(
      { __typename?: 'BountyStatus' }
      & Pick<BountyStatus, 'id' | 'status'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'startDateTime' | 'number'>
      ) }
    )>> }
  )>> }
);

export type BountyPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkBountyFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type TopicFragment = (
  { __typename?: 'post_topics' }
  & Pick<Post_Topics, 'id' | 'name'>
);

export type OnchainLinkDiscussionFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_referendum_id' | 'onchain_motion_id' | 'onchain_proposal_id' | 'onchain_treasury_proposal_id'>
);

export type DiscussionPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkDiscussionFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type PostFieldsFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments_aggregate: (
    { __typename?: 'comments_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'comments_aggregate_fields' }
      & Pick<Comments_Aggregate_Fields, 'count'>
    )> }
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'name' | 'id'>
  ), last_update?: Maybe<(
    { __typename?: 'post_last_update' }
    & Pick<Post_Last_Update, 'last_update'>
  )> }
);

export type OnchainLinkMotionPreimageFragment = (
  { __typename?: 'Preimage' }
  & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
  & { preimageArguments?: Maybe<Array<(
    { __typename?: 'PreimageArgument' }
    & Pick<PreimageArgument, 'id' | 'name' | 'value'>
  )>> }
);

export type OnchainLinkMotionTreasuryFragment = (
  { __typename?: 'TreasurySpendProposal' }
  & Pick<TreasurySpendProposal, 'beneficiary' | 'bond' | 'value'>
);

export type OnchainLinkMotionFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_referendum_id' | 'onchain_motion_id'>
  & { onchain_motion: Array<Maybe<(
    { __typename?: 'Motion' }
    & Pick<Motion, 'id' | 'memberCount' | 'method' | 'motionProposalHash'>
    & { motionStatus?: Maybe<Array<(
      { __typename?: 'MotionStatus' }
      & Pick<MotionStatus, 'id' | 'status'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'number'>
      ) }
    )>>, motionProposalArguments?: Maybe<Array<(
      { __typename?: 'MotionProposalArgument' }
      & Pick<MotionProposalArgument, 'name' | 'value'>
    )>>, preimage?: Maybe<(
      { __typename?: 'Preimage' }
      & OnchainLinkMotionPreimageFragment
    )>, treasurySpendProposal?: Maybe<(
      { __typename?: 'TreasurySpendProposal' }
      & OnchainLinkMotionTreasuryFragment
    )> }
  )>> }
);

export type MotionPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkMotionFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type OnchainLinkProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_proposal_id' | 'onchain_referendum_id'>
  & { onchain_proposal: Array<Maybe<(
    { __typename?: 'Proposal' }
    & Pick<Proposal, 'id' | 'depositAmount'>
    & { proposalStatus?: Maybe<Array<(
      { __typename?: 'ProposalStatus' }
      & Pick<ProposalStatus, 'id' | 'status'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'number'>
      ) }
    )>>, preimage?: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
      & { preimageArguments?: Maybe<Array<(
        { __typename?: 'PreimageArgument' }
        & Pick<PreimageArgument, 'id' | 'name' | 'value'>
      )>> }
    )> }
  )>> }
);

export type ProposalPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkProposalFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type OnchainLinkReferendumFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_referendum_id'>
  & { onchain_referendum: Array<Maybe<(
    { __typename?: 'Referendum' }
    & Pick<Referendum, 'id' | 'delay' | 'end' | 'voteThreshold'>
    & { referendumStatus?: Maybe<Array<(
      { __typename?: 'ReferendumStatus' }
      & Pick<ReferendumStatus, 'status' | 'id'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'startDateTime' | 'number'>
      ) }
    )>>, preimage?: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
      & { preimageArguments?: Maybe<Array<(
        { __typename?: 'PreimageArgument' }
        & Pick<PreimageArgument, 'id' | 'name' | 'value'>
      )>> }
    )> }
  )>> }
);

export type ReferendumPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkReferendumFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type SearchPostFieldsFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments_aggregate: (
    { __typename?: 'comments_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'comments_aggregate_fields' }
      & Pick<Comments_Aggregate_Fields, 'count'>
    )> }
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'name' | 'id'>
  ), last_update?: Maybe<(
    { __typename?: 'post_last_update' }
    & Pick<Post_Last_Update, 'last_update'>
  )> }
);

export type OnchainLinkTechCommitteeProposalPreimageFragment = (
  { __typename?: 'Preimage' }
  & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
  & { preimageArguments?: Maybe<Array<(
    { __typename?: 'PreimageArgument' }
    & Pick<PreimageArgument, 'id' | 'name' | 'value'>
  )>> }
);

export type OnchainLinkTechCommitteeProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_tech_committee_proposal_id'>
  & { onchain_tech_committee_proposal: Array<Maybe<(
    { __typename?: 'TechCommitteeProposal' }
    & Pick<TechCommitteeProposal, 'id' | 'metaDescription' | 'memberCount' | 'method' | 'proposalHash'>
    & { status?: Maybe<Array<(
      { __typename?: 'TechCommitteeProposalStatus' }
      & Pick<TechCommitteeProposalStatus, 'id' | 'status'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'number'>
      ) }
    )>>, proposalArguments?: Maybe<Array<(
      { __typename?: 'TechCommitteeProposalArgument' }
      & Pick<TechCommitteeProposalArgument, 'name' | 'value'>
    )>>, preimage?: Maybe<(
      { __typename?: 'Preimage' }
      & OnchainLinkTechCommitteeProposalPreimageFragment
    )> }
  )>> }
);

export type TechCommitteeProposalPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkTechCommitteeProposalFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type OnchainLinkTipFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_tip_id'>
  & { onchain_tip: Array<Maybe<(
    { __typename?: 'Tip' }
    & Pick<Tip, 'id' | 'hash' | 'reason' | 'who' | 'finder' | 'finderFee' | 'closes'>
    & { tipStatus?: Maybe<Array<(
      { __typename?: 'TipStatus' }
      & Pick<TipStatus, 'id' | 'status'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'startDateTime' | 'number'>
      ) }
    )>> }
  )>> }
);

export type TipPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkTipFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type OnchainLinkTreasuryProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_treasury_proposal_id' | 'onchain_motion_id'>
  & { onchain_treasury_spend_proposal: Array<Maybe<(
    { __typename?: 'TreasurySpendProposal' }
    & Pick<TreasurySpendProposal, 'id' | 'beneficiary' | 'value' | 'bond'>
    & { treasuryStatus?: Maybe<Array<(
      { __typename?: 'TreasuryStatus' }
      & Pick<TreasuryStatus, 'id' | 'status'>
      & { blockNumber: (
        { __typename?: 'BlockNumber' }
        & Pick<BlockNumber, 'number'>
      ) }
    )>> }
  )>> }
);

export type TreasuryProposalPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author?: Maybe<(
    { __typename?: 'User' }
    & AuthorFieldsFragment
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link?: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkTreasuryProposalFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type AllBountyPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllBountyPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_bounty_id' | 'proposer_address'>
      & { onchain_bounty: Array<Maybe<(
        { __typename?: 'Bounty' }
        & Pick<Bounty, 'id' | 'value'>
        & { bountyStatus?: Maybe<Array<(
          { __typename?: 'BountyStatus' }
          & Pick<BountyStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type BountyPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BountyPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & BountyPostFragment
  )> }
);

export type AllMotionPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllMotionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
      & { onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type CreatePostMutationVariables = Exact<{
  userId: Scalars['Int'];
  content: Scalars['String'];
  topicId: Scalars['Int'];
  title: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename: 'mutation_root' }
  & { insert_posts?: Maybe<(
    { __typename?: 'posts_mutation_response' }
    & Pick<Posts_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'posts' }
      & Pick<Posts, 'id'>
    )> }
  )> }
);

export type CreatePollMutationVariables = Exact<{
  postId: Scalars['Int'];
  blockEnd: Scalars['Int'];
}>;


export type CreatePollMutation = (
  { __typename: 'mutation_root' }
  & { insert_poll?: Maybe<(
    { __typename?: 'poll_mutation_response' }
    & Pick<Poll_Mutation_Response, 'affected_rows'>
  )> }
);

export type Post_TopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type Post_TopicsQuery = (
  { __typename?: 'query_root' }
  & { post_topics: Array<(
    { __typename?: 'post_topics' }
    & TopicFragment
  )> }
);

export type DiscussionPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DiscussionPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & DiscussionPostFragment
  )> }
);

export type LatestDiscussionPostsQueryVariables = Exact<{
  limit?: Scalars['Int'];
}>;


export type LatestDiscussionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & PostFieldsFragment
  )> }
);

export type DiscussionPostsIdDescQueryVariables = Exact<{
  limit?: Scalars['Int'];
}>;


export type DiscussionPostsIdDescQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & PostFieldsFragment
  )> }
);

export type DiscussionPostsIdAscQueryVariables = Exact<{
  limit?: Scalars['Int'];
}>;


export type DiscussionPostsIdAscQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & PostFieldsFragment
  )> }
);

export type MotionPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MotionPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & MotionPostFragment
  )> }
);

export type ChangeNotificationPreferenceMutationVariables = Exact<{
  postParticipated?: Maybe<Scalars['Boolean']>;
  postCreated?: Maybe<Scalars['Boolean']>;
  newProposal?: Maybe<Scalars['Boolean']>;
  ownProposal?: Maybe<Scalars['Boolean']>;
}>;


export type ChangeNotificationPreferenceMutation = (
  { __typename?: 'mutation_root' }
  & { changeNotificationPreference?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type LatestBountyPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestBountyPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_bounty_id' | 'proposer_address'>
      & { onchain_bounty: Array<Maybe<(
        { __typename?: 'Bounty' }
        & Pick<Bounty, 'id'>
        & { bountyStatus?: Maybe<Array<(
          { __typename?: 'BountyStatus' }
          & Pick<BountyStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type BountiesCountQueryVariables = Exact<{
  postType: Scalars['Int'];
}>;


export type BountiesCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestMotionPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestMotionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
      & { onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type LatestMotionsCountQueryVariables = Exact<{
  postType: Scalars['Int'];
}>;


export type LatestMotionsCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestDemocracyProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestDemocracyProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus?: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type DemocracyProposalCountQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
}>;


export type DemocracyProposalCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestReferendaPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestReferendaPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_referendum_id' | 'proposer_address'>
      & { onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id' | 'end'>
        & { referendumStatus?: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type ReferundumCountQueryVariables = Exact<{
  postType: Scalars['Int'];
}>;


export type ReferundumCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestTechCommitteeProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestTechCommitteeProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tech_committee_proposal_id' | 'proposer_address'>
      & { onchain_tech_committee_proposal: Array<Maybe<(
        { __typename?: 'TechCommitteeProposal' }
        & Pick<TechCommitteeProposal, 'id'>
        & { status?: Maybe<Array<(
          { __typename?: 'TechCommitteeProposalStatus' }
          & Pick<TechCommitteeProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type TechCommitteeProposalCountQueryVariables = Exact<{
  postType: Scalars['Int'];
}>;


export type TechCommitteeProposalCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestTipPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestTipPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tip_id' | 'proposer_address'>
      & { onchain_tip: Array<Maybe<(
        { __typename?: 'Tip' }
        & Pick<Tip, 'id' | 'reason'>
        & { tipStatus?: Maybe<Array<(
          { __typename?: 'TipStatus' }
          & Pick<TipStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type TipProposalCountQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
}>;


export type TipProposalCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestDemocracyTreasuryProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type LatestDemocracyTreasuryProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus?: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type DemocracyTreasuryProposalCountQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
}>;


export type DemocracyTreasuryProposalCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type LatestPostsQueryVariables = Exact<{
  limit?: Scalars['Int'];
}>;


export type LatestPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'onchain_bounty_id' | 'onchain_motion_id' | 'onchain_referendum_id' | 'onchain_tech_committee_proposal_id' | 'onchain_tip_id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus?: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_bounty: Array<Maybe<(
        { __typename?: 'Bounty' }
        & Pick<Bounty, 'id'>
        & { bountyStatus?: Maybe<Array<(
          { __typename?: 'BountyStatus' }
          & Pick<BountyStatus, 'id' | 'status'>
        )>> }
      )>>, onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id' | 'end'>
        & { referendumStatus?: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_tech_committee_proposal: Array<Maybe<(
        { __typename?: 'TechCommitteeProposal' }
        & Pick<TechCommitteeProposal, 'id'>
        & { status?: Maybe<Array<(
          { __typename?: 'TechCommitteeProposalStatus' }
          & Pick<TechCommitteeProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_tip: Array<Maybe<(
        { __typename?: 'Tip' }
        & Pick<Tip, 'id' | 'reason'>
        & { tipStatus?: Maybe<Array<(
          { __typename?: 'TipStatus' }
          & Pick<TipStatus, 'id' | 'status'>
        )>> }
      )>>, onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus?: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type PostsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type NetworkSocialsQueryVariables = Exact<{
  network: Scalars['String'];
}>;


export type NetworkSocialsQuery = (
  { __typename?: 'query_root' }
  & { blockchain_socials: Array<(
    { __typename?: 'blockchain_socials' }
    & Pick<Blockchain_Socials, 'block_explorer' | 'discord' | 'github' | 'homepage' | 'id' | 'network' | 'reddit' | 'telegram' | 'twitter' | 'youtube'>
  )> }
);

export type AboutQueryVariables = Exact<{
  network: Scalars['String'];
  address: Scalars['String'];
}>;


export type AboutQuery = (
  { __typename?: 'query_root' }
  & { about?: Maybe<(
    { __typename?: 'About' }
    & Pick<About, 'network' | 'address' | 'title' | 'description' | 'image'>
  )> }
);

export type ChangeAboutMutationVariables = Exact<{
  network: Scalars['String'];
  address: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  signature: Scalars['String'];
}>;


export type ChangeAboutMutation = (
  { __typename?: 'mutation_root' }
  & { changeAbout?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type ProposalPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ProposalPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & ProposalPostFragment
  )> }
);

export type AllDemocracyProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllDemocracyProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus?: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type AllReferendaPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllReferendaPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_referendum_id' | 'proposer_address'>
      & { onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id' | 'end'>
        & { referendumStatus?: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type ReferendumPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReferendumPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & ReferendumPostFragment
  )> }
);

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetPasswordMutation = (
  { __typename?: 'mutation_root' }
  & { requestResetPassword?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type ResetPasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  userId: Scalars['Int'];
  token: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'mutation_root' }
  & { resetPassword?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type SearchPostsQueryVariables = Exact<{
  term: Scalars['String'];
}>;


export type SearchPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & SearchPostFieldsFragment
  )> }
);

export type ChangeUsernameMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangeUsernameMutation = (
  { __typename?: 'mutation_root' }
  & { changeUsername?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ChangeEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangeEmailMutation = (
  { __typename?: 'mutation_root' }
  & { changeEmail?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'mutation_root' }
  & { changePassword?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type AddressLinkStartMutationVariables = Exact<{
  network: Scalars['String'];
  address: Scalars['String'];
}>;


export type AddressLinkStartMutation = (
  { __typename?: 'mutation_root' }
  & { addressLinkStart?: Maybe<(
    { __typename?: 'AddressLinkType' }
    & Pick<AddressLinkType, 'sign_message' | 'message' | 'address_id'>
  )> }
);

export type AddressLinkConfirmMutationVariables = Exact<{
  address_id: Scalars['Int'];
  signature: Scalars['String'];
}>;


export type AddressLinkConfirmMutation = (
  { __typename?: 'mutation_root' }
  & { addressLinkConfirm?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type AddressUnlinkMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type AddressUnlinkMutation = (
  { __typename?: 'mutation_root' }
  & { addressUnlink?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ResendVerifyEmailTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type ResendVerifyEmailTokenMutation = (
  { __typename?: 'mutation_root' }
  & { resendVerifyEmailToken?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type SetDefaultAddressMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type SetDefaultAddressMutation = (
  { __typename?: 'mutation_root' }
  & { setDefaultAddress?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type SetCredentialsStartMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type SetCredentialsStartMutation = (
  { __typename?: 'mutation_root' }
  & { setCredentialsStart?: Maybe<(
    { __typename?: 'AddressLoginType' }
    & Pick<AddressLoginType, 'message' | 'signMessage'>
  )> }
);

export type SetCredentialsConfirmMutationVariables = Exact<{
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  signature: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SetCredentialsConfirmMutation = (
  { __typename?: 'mutation_root' }
  & { setCredentialsConfirm?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type DeleteAccountMutationVariables = Exact<{
  password: Scalars['String'];
}>;


export type DeleteAccountMutation = (
  { __typename?: 'mutation_root' }
  & { deleteAccount?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type MultisigLinkStartMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type MultisigLinkStartMutation = (
  { __typename?: 'mutation_root' }
  & { multisigLinkStart?: Maybe<(
    { __typename?: 'AddressLoginType' }
    & Pick<AddressLoginType, 'message' | 'signMessage'>
  )> }
);

export type MultisigLinkConfirmMutationVariables = Exact<{
  network: Scalars['String'];
  address: Scalars['String'];
  addresses: Scalars['String'];
  ss58Prefix: Scalars['Int'];
  threshold: Scalars['Int'];
  signatory: Scalars['String'];
  signature: Scalars['String'];
}>;


export type MultisigLinkConfirmMutation = (
  { __typename?: 'mutation_root' }
  & { multisigLinkConfirm?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type TechCommitteeProposalPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TechCommitteeProposalPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & TechCommitteeProposalPostFragment
  )> }
);

export type AllTechCommitteeProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllTechCommitteeProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tech_committee_proposal_id' | 'proposer_address'>
      & { onchain_tech_committee_proposal: Array<Maybe<(
        { __typename?: 'TechCommitteeProposal' }
        & Pick<TechCommitteeProposal, 'id' | 'method'>
        & { status?: Maybe<Array<(
          { __typename?: 'TechCommitteeProposalStatus' }
          & Pick<TechCommitteeProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type TipPostAndCommentsQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type TipPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & TipPostFragment
  )> }
);

export type AllTipPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllTipPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tip_id' | 'proposer_address'>
      & { onchain_tip: Array<Maybe<(
        { __typename?: 'Tip' }
        & Pick<Tip, 'id' | 'reason'>
        & { tipStatus?: Maybe<Array<(
          { __typename?: 'TipStatus' }
          & Pick<TipStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type TrackerBountyPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainBountyIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type TrackerBountyPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_bounty_id' | 'proposer_address'>
      & { onchain_bounty: Array<Maybe<(
        { __typename?: 'Bounty' }
        & Pick<Bounty, 'id'>
        & { bountyStatus?: Maybe<Array<(
          { __typename?: 'BountyStatus' }
          & Pick<BountyStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type TrackerMotionPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainMotionIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type TrackerMotionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
      & { onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type TrackerDemocracyProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainProposalIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type TrackerDemocracyProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus?: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type TrackerReferendaPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainReferendumIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type TrackerReferendaPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_referendum_id' | 'proposer_address'>
      & { onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id' | 'end'>
        & { referendumStatus?: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type TrackerTechCommitteeProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainTechCommitteeProposalIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type TrackerTechCommitteeProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tech_committee_proposal_id' | 'proposer_address'>
      & { onchain_tech_committee_proposal: Array<Maybe<(
        { __typename?: 'TechCommitteeProposal' }
        & Pick<TechCommitteeProposal, 'id'>
        & { status?: Maybe<Array<(
          { __typename?: 'TechCommitteeProposalStatus' }
          & Pick<TechCommitteeProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type TrackerTipPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainTipIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type TrackerTipPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tip_id' | 'proposer_address'>
      & { onchain_tip: Array<Maybe<(
        { __typename?: 'Tip' }
        & Pick<Tip, 'id' | 'reason'>
        & { tipStatus?: Maybe<Array<(
          { __typename?: 'TipStatus' }
          & Pick<TipStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type TrackerDemocracyTreasuryProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  onchainTreasuryProposalIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type TrackerDemocracyTreasuryProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus?: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type AllDemocracyTreasuryProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type AllDemocracyTreasuryProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus?: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type TreasuryProposalPostAndCommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TreasuryProposalPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & TreasuryProposalPostFragment
  )> }
);

export type UndoEmailChangeMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type UndoEmailChangeMutation = (
  { __typename?: 'mutation_root' }
  & { undoEmailChange?: Maybe<(
    { __typename?: 'UndoEmailChangeResponse' }
    & Pick<UndoEmailChangeResponse, 'message' | 'token' | 'email'>
  )> }
);

export type ProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type ProfileQuery = (
  { __typename?: 'query_root' }
  & { profile?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'kusama_default_address' | 'polkadot_default_address'>
  )> }
);

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = (
  { __typename?: 'mutation_root' }
  & { verifyEmail?: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type GetLatestMotionsCountQueryVariables = Exact<{
  postType: Scalars['Int'];
}>;


export type GetLatestMotionsCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetLatestPostsQueryVariables = Exact<{
  limit?: Scalars['Int'];
}>;


export type GetLatestPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'onchain_bounty_id' | 'onchain_motion_id' | 'onchain_referendum_id' | 'onchain_tech_committee_proposal_id' | 'onchain_tip_id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus?: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_bounty: Array<Maybe<(
        { __typename?: 'Bounty' }
        & Pick<Bounty, 'id'>
        & { bountyStatus?: Maybe<Array<(
          { __typename?: 'BountyStatus' }
          & Pick<BountyStatus, 'id' | 'status'>
        )>> }
      )>>, onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id' | 'end'>
        & { referendumStatus?: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_tech_committee_proposal: Array<Maybe<(
        { __typename?: 'TechCommitteeProposal' }
        & Pick<TechCommitteeProposal, 'id'>
        & { status?: Maybe<Array<(
          { __typename?: 'TechCommitteeProposalStatus' }
          & Pick<TechCommitteeProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>>, onchain_tip: Array<Maybe<(
        { __typename?: 'Tip' }
        & Pick<Tip, 'id' | 'reason'>
        & { tipStatus?: Maybe<Array<(
          { __typename?: 'TipStatus' }
          & Pick<TipStatus, 'id' | 'status'>
        )>> }
      )>>, onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus?: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type GetLatestBountyPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type GetLatestBountyPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_bounty_id' | 'proposer_address'>
      & { onchain_bounty: Array<Maybe<(
        { __typename?: 'Bounty' }
        & Pick<Bounty, 'id'>
        & { bountyStatus?: Maybe<Array<(
          { __typename?: 'BountyStatus' }
          & Pick<BountyStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type GetLatestMotionPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type GetLatestMotionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
      & { onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type FetchLatestMotionPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type FetchLatestMotionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
      & { onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus?: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type GetLatestDemocracyProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type GetLatestDemocracyProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus?: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type GetLatestReferendaPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type GetLatestReferendaPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_referendum_id' | 'proposer_address'>
      & { onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id' | 'end'>
        & { referendumStatus?: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage?: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'id' | 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type GetLatestTipPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type GetLatestTipPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_tip_id' | 'proposer_address'>
      & { onchain_tip: Array<Maybe<(
        { __typename?: 'Tip' }
        & Pick<Tip, 'id' | 'reason'>
        & { tipStatus?: Maybe<Array<(
          { __typename?: 'TipStatus' }
          & Pick<TipStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type GetLatestDemocracyTreasuryProposalPostsQueryVariables = Exact<{
  postType: Scalars['Int'];
  postTopic: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type GetLatestDemocracyTreasuryProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFieldsFragment
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link?: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus?: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type DiscussionsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type DiscussionsCountQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export const OptionPollFieldsFragmentDoc = gql`
    fragment optionPollFields on option_poll {
  id
  post_id
  question
  options
  end_at
  created_at
  updated_at
}
    `;
export const OptionPollVotesFieldsFragmentDoc = gql`
    fragment optionPollVotesFields on option_poll_votes {
  id
  option_poll_voter {
    id
    username
  }
  option
  created_at
  updated_at
}
    `;
export const PollFieldsFragmentDoc = gql`
    fragment pollFields on poll {
  id
  block_end
  created_at
  updated_at
}
    `;
export const PollVotesFieldsFragmentDoc = gql`
    fragment pollVotesFields on poll_votes {
  id
  voter {
    id
    username
    kusama_default_address
    polkadot_default_address
  }
  vote
  created_at
  updated_at
}
    `;
export const PostReactionFieldsFragmentDoc = gql`
    fragment postReactionFields on post_reactions {
  id
  reacting_user {
    id
    username
  }
  reaction
  created_at
  updated_at
}
    `;
export const CommentReactionFieldsFragmentDoc = gql`
    fragment commentReactionFields on comment_reactions {
  id
  reacting_user {
    id
    username
  }
  reaction
  created_at
  updated_at
}
    `;
export const AuthorFieldsFragmentDoc = gql`
    fragment authorFields on User {
  id
  kusama_default_address
  polkadot_default_address
  username
}
    `;
export const ReplyFieldsFragmentDoc = gql`
    fragment replyFields on replies {
  id
  author {
    ...authorFields
  }
  comment_id
  content
  created_at
  updated_at
}
    ${AuthorFieldsFragmentDoc}`;
export const CommentFieldsFragmentDoc = gql`
    fragment commentFields on comments {
  id
  author {
    ...authorFields
  }
  replies {
    ...replyFields
  }
  content
  created_at
  updated_at
}
    ${AuthorFieldsFragmentDoc}
${ReplyFieldsFragmentDoc}`;
export const OnchainLinkBountyFragmentDoc = gql`
    fragment onchainLinkBounty on onchain_links {
  id
  proposer_address
  onchain_bounty_id
  onchain_bounty(where: {}) {
    id
    proposer
    value
    fee
    curatorDeposit
    bond
    bountyId
    curator
    beneficiary
    bountyStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        startDateTime
        number
      }
    }
  }
}
    `;
export const BountyPostFragmentDoc = gql`
    fragment bountyPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkBounty
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkBountyFragmentDoc}`;
export const TopicFragmentDoc = gql`
    fragment topic on post_topics {
  id
  name
}
    `;
export const OnchainLinkDiscussionFragmentDoc = gql`
    fragment onchainLinkDiscussion on onchain_links {
  id
  onchain_referendum_id
  onchain_motion_id
  onchain_proposal_id
  onchain_treasury_proposal_id
}
    `;
export const DiscussionPostFragmentDoc = gql`
    fragment discussionPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkDiscussion
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkDiscussionFragmentDoc}`;
export const PostFieldsFragmentDoc = gql`
    fragment postFields on posts {
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
  last_update {
    last_update
  }
}
    ${AuthorFieldsFragmentDoc}`;
export const OnchainLinkMotionPreimageFragmentDoc = gql`
    fragment onchainLinkMotionPreimage on Preimage {
  hash
  id
  metaDescription
  method
  preimageArguments {
    id
    name
    value
  }
}
    `;
export const OnchainLinkMotionTreasuryFragmentDoc = gql`
    fragment onchainLinkMotionTreasury on TreasurySpendProposal {
  beneficiary
  bond
  value
}
    `;
export const OnchainLinkMotionFragmentDoc = gql`
    fragment onchainLinkMotion on onchain_links {
  id
  proposer_address
  onchain_referendum_id
  onchain_motion_id
  onchain_motion(where: {}) {
    id
    motionStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
    memberCount
    method
    motionProposalHash
    motionProposalArguments {
      name
      value
    }
    preimage {
      ...onchainLinkMotionPreimage
    }
    treasurySpendProposal {
      ...onchainLinkMotionTreasury
    }
  }
}
    ${OnchainLinkMotionPreimageFragmentDoc}
${OnchainLinkMotionTreasuryFragmentDoc}`;
export const MotionPostFragmentDoc = gql`
    fragment motionPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkMotion
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkMotionFragmentDoc}`;
export const OnchainLinkProposalFragmentDoc = gql`
    fragment onchainLinkProposal on onchain_links {
  id
  proposer_address
  onchain_proposal_id
  onchain_referendum_id
  onchain_proposal(where: {}) {
    id
    depositAmount
    proposalStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
    preimage {
      hash
      id
      metaDescription
      method
      preimageArguments {
        id
        name
        value
      }
    }
  }
}
    `;
export const ProposalPostFragmentDoc = gql`
    fragment proposalPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkProposalFragmentDoc}`;
export const OnchainLinkReferendumFragmentDoc = gql`
    fragment onchainLinkReferendum on onchain_links {
  id
  proposer_address
  onchain_referendum_id
  onchain_referendum(where: {}) {
    id
    delay
    end
    voteThreshold
    referendumStatus(orderBy: id_DESC) {
      blockNumber {
        startDateTime
        number
      }
      status
      id
    }
    preimage {
      hash
      id
      metaDescription
      method
      preimageArguments {
        id
        name
        value
      }
    }
  }
}
    `;
export const ReferendumPostFragmentDoc = gql`
    fragment referendumPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkReferendum
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkReferendumFragmentDoc}`;
export const SearchPostFieldsFragmentDoc = gql`
    fragment searchPostFields on posts {
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
  last_update {
    last_update
  }
}
    ${AuthorFieldsFragmentDoc}`;
export const OnchainLinkTechCommitteeProposalPreimageFragmentDoc = gql`
    fragment onchainLinkTechCommitteeProposalPreimage on Preimage {
  hash
  id
  metaDescription
  method
  preimageArguments {
    id
    name
    value
  }
}
    `;
export const OnchainLinkTechCommitteeProposalFragmentDoc = gql`
    fragment onchainLinkTechCommitteeProposal on onchain_links {
  id
  proposer_address
  onchain_tech_committee_proposal_id
  onchain_tech_committee_proposal(where: {}) {
    id
    status(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
    metaDescription
    memberCount
    method
    proposalHash
    proposalArguments {
      name
      value
    }
    preimage {
      ...onchainLinkTechCommitteeProposalPreimage
    }
  }
}
    ${OnchainLinkTechCommitteeProposalPreimageFragmentDoc}`;
export const TechCommitteeProposalPostFragmentDoc = gql`
    fragment techCommitteeProposalPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTechCommitteeProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkTechCommitteeProposalFragmentDoc}`;
export const OnchainLinkTipFragmentDoc = gql`
    fragment onchainLinkTip on onchain_links {
  id
  proposer_address
  onchain_tip_id
  onchain_tip(where: {}) {
    id
    hash
    reason
    who
    finder
    finderFee
    closes
    tipStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        startDateTime
        number
      }
    }
  }
}
    `;
export const TipPostFragmentDoc = gql`
    fragment tipPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTip
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkTipFragmentDoc}`;
export const OnchainLinkTreasuryProposalFragmentDoc = gql`
    fragment onchainLinkTreasuryProposal on onchain_links {
  id
  proposer_address
  onchain_treasury_proposal_id
  onchain_motion_id
  onchain_treasury_spend_proposal(where: {}) {
    id
    beneficiary
    value
    bond
    treasuryStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
  }
}
    `;
export const TreasuryProposalPostFragmentDoc = gql`
    fragment treasuryProposalPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTreasuryProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${AuthorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${OnchainLinkTreasuryProposalFragmentDoc}`;
export const EditCommentDocument = gql`
    mutation EditComment($id: uuid!, $content: String!) {
  update_comments(where: {id: {_eq: $id}}, _set: {content: $content}) {
    affected_rows
  }
}
    `;
export type EditCommentMutationFn = ApolloReactCommon.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, baseOptions);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = ApolloReactCommon.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($id: uuid!) {
  delete_comments(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type DeleteCommentMutationFn = ApolloReactCommon.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, baseOptions);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = ApolloReactCommon.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const AddCommentReplyDocument = gql`
    mutation AddCommentReply($authorId: Int!, $content: String!, $commentId: uuid!) {
  __typename
  insert_replies(
    objects: {author_id: $authorId, content: $content, comment_id: $commentId}
  ) {
    affected_rows
  }
}
    `;
export type AddCommentReplyMutationFn = ApolloReactCommon.MutationFunction<AddCommentReplyMutation, AddCommentReplyMutationVariables>;

/**
 * __useAddCommentReplyMutation__
 *
 * To run a mutation, you first call `useAddCommentReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentReplyMutation, { data, loading, error }] = useAddCommentReplyMutation({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      content: // value for 'content'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useAddCommentReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommentReplyMutation, AddCommentReplyMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommentReplyMutation, AddCommentReplyMutationVariables>(AddCommentReplyDocument, baseOptions);
      }
export type AddCommentReplyMutationHookResult = ReturnType<typeof useAddCommentReplyMutation>;
export type AddCommentReplyMutationResult = ApolloReactCommon.MutationResult<AddCommentReplyMutation>;
export type AddCommentReplyMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentReplyMutation, AddCommentReplyMutationVariables>;
export const LoginDocument = gql`
    mutation LOGIN($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AddressLoginStartDocument = gql`
    mutation AddressLoginStart($address: String!) {
  addressLoginStart(address: $address) {
    message
    signMessage
  }
}
    `;
export type AddressLoginStartMutationFn = ApolloReactCommon.MutationFunction<AddressLoginStartMutation, AddressLoginStartMutationVariables>;

/**
 * __useAddressLoginStartMutation__
 *
 * To run a mutation, you first call `useAddressLoginStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLoginStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLoginStartMutation, { data, loading, error }] = useAddressLoginStartMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressLoginStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLoginStartMutation, AddressLoginStartMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLoginStartMutation, AddressLoginStartMutationVariables>(AddressLoginStartDocument, baseOptions);
      }
export type AddressLoginStartMutationHookResult = ReturnType<typeof useAddressLoginStartMutation>;
export type AddressLoginStartMutationResult = ApolloReactCommon.MutationResult<AddressLoginStartMutation>;
export type AddressLoginStartMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLoginStartMutation, AddressLoginStartMutationVariables>;
export const AddressLoginDocument = gql`
    mutation AddressLogin($address: String!, $signature: String!) {
  addressLogin(address: $address, signature: $signature) {
    token
  }
}
    `;
export type AddressLoginMutationFn = ApolloReactCommon.MutationFunction<AddressLoginMutation, AddressLoginMutationVariables>;

/**
 * __useAddressLoginMutation__
 *
 * To run a mutation, you first call `useAddressLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLoginMutation, { data, loading, error }] = useAddressLoginMutation({
 *   variables: {
 *      address: // value for 'address'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useAddressLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLoginMutation, AddressLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLoginMutation, AddressLoginMutationVariables>(AddressLoginDocument, baseOptions);
      }
export type AddressLoginMutationHookResult = ReturnType<typeof useAddressLoginMutation>;
export type AddressLoginMutationResult = ApolloReactCommon.MutationResult<AddressLoginMutation>;
export type AddressLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLoginMutation, AddressLoginMutationVariables>;
export const LogoutDocument = gql`
    mutation LOGOUT {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const FetchLatestBlockNumberDocument = gql`
    query FetchLatestBlockNumber {
  blockNumbers(last: 1) {
    number
  }
}
    `;

/**
 * __useFetchLatestBlockNumberQuery__
 *
 * To run a query within a React component, call `useFetchLatestBlockNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchLatestBlockNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLatestBlockNumberQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchLatestBlockNumberQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchLatestBlockNumberQuery, FetchLatestBlockNumberQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchLatestBlockNumberQuery, FetchLatestBlockNumberQueryVariables>(FetchLatestBlockNumberDocument, baseOptions);
      }
export function useFetchLatestBlockNumberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchLatestBlockNumberQuery, FetchLatestBlockNumberQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchLatestBlockNumberQuery, FetchLatestBlockNumberQueryVariables>(FetchLatestBlockNumberDocument, baseOptions);
        }
export type FetchLatestBlockNumberQueryHookResult = ReturnType<typeof useFetchLatestBlockNumberQuery>;
export type FetchLatestBlockNumberLazyQueryHookResult = ReturnType<typeof useFetchLatestBlockNumberLazyQuery>;
export type FetchLatestBlockNumberQueryResult = ApolloReactCommon.QueryResult<FetchLatestBlockNumberQuery, FetchLatestBlockNumberQueryVariables>;
export const CreateOptionPollDocument = gql`
    mutation createOptionPoll($postId: Int!, $question: String!, $options: String!, $endAt: Int!) {
  __typename
  insert_option_poll(
    objects: {post_id: $postId, question: $question, options: $options, end_at: $endAt}
  ) {
    affected_rows
  }
}
    `;
export type CreateOptionPollMutationFn = ApolloReactCommon.MutationFunction<CreateOptionPollMutation, CreateOptionPollMutationVariables>;

/**
 * __useCreateOptionPollMutation__
 *
 * To run a mutation, you first call `useCreateOptionPollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOptionPollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOptionPollMutation, { data, loading, error }] = useCreateOptionPollMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      question: // value for 'question'
 *      options: // value for 'options'
 *      endAt: // value for 'endAt'
 *   },
 * });
 */
export function useCreateOptionPollMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOptionPollMutation, CreateOptionPollMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOptionPollMutation, CreateOptionPollMutationVariables>(CreateOptionPollDocument, baseOptions);
      }
export type CreateOptionPollMutationHookResult = ReturnType<typeof useCreateOptionPollMutation>;
export type CreateOptionPollMutationResult = ApolloReactCommon.MutationResult<CreateOptionPollMutation>;
export type CreateOptionPollMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOptionPollMutation, CreateOptionPollMutationVariables>;
export const OptionPollDocument = gql`
    query OptionPoll($postId: Int!) {
  option_poll(where: {post_id: {_eq: $postId}}) {
    ...optionPollFields
  }
}
    ${OptionPollFieldsFragmentDoc}`;

/**
 * __useOptionPollQuery__
 *
 * To run a query within a React component, call `useOptionPollQuery` and pass it any options that fit your needs.
 * When your component renders, `useOptionPollQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOptionPollQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useOptionPollQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OptionPollQuery, OptionPollQueryVariables>) {
        return ApolloReactHooks.useQuery<OptionPollQuery, OptionPollQueryVariables>(OptionPollDocument, baseOptions);
      }
export function useOptionPollLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OptionPollQuery, OptionPollQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OptionPollQuery, OptionPollQueryVariables>(OptionPollDocument, baseOptions);
        }
export type OptionPollQueryHookResult = ReturnType<typeof useOptionPollQuery>;
export type OptionPollLazyQueryHookResult = ReturnType<typeof useOptionPollLazyQuery>;
export type OptionPollQueryResult = ApolloReactCommon.QueryResult<OptionPollQuery, OptionPollQueryVariables>;
export const OptionPollVotesDocument = gql`
    query OptionPollVotes($optionPollId: Int!) {
  option_poll_votes(where: {option_poll_id: {_eq: $optionPollId}}) {
    ...optionPollVotesFields
  }
}
    ${OptionPollVotesFieldsFragmentDoc}`;

/**
 * __useOptionPollVotesQuery__
 *
 * To run a query within a React component, call `useOptionPollVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOptionPollVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOptionPollVotesQuery({
 *   variables: {
 *      optionPollId: // value for 'optionPollId'
 *   },
 * });
 */
export function useOptionPollVotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OptionPollVotesQuery, OptionPollVotesQueryVariables>) {
        return ApolloReactHooks.useQuery<OptionPollVotesQuery, OptionPollVotesQueryVariables>(OptionPollVotesDocument, baseOptions);
      }
export function useOptionPollVotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OptionPollVotesQuery, OptionPollVotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OptionPollVotesQuery, OptionPollVotesQueryVariables>(OptionPollVotesDocument, baseOptions);
        }
export type OptionPollVotesQueryHookResult = ReturnType<typeof useOptionPollVotesQuery>;
export type OptionPollVotesLazyQueryHookResult = ReturnType<typeof useOptionPollVotesLazyQuery>;
export type OptionPollVotesQueryResult = ApolloReactCommon.QueryResult<OptionPollVotesQuery, OptionPollVotesQueryVariables>;
export const AddOptionPollVoteDocument = gql`
    mutation AddOptionPollVote($optionPollId: Int!, $userId: Int!, $option: String!) {
  __typename
  insert_option_poll_votes_one(
    object: {option_poll_id: $optionPollId, user_id: $userId, option: $option}
  ) {
    id
  }
}
    `;
export type AddOptionPollVoteMutationFn = ApolloReactCommon.MutationFunction<AddOptionPollVoteMutation, AddOptionPollVoteMutationVariables>;

/**
 * __useAddOptionPollVoteMutation__
 *
 * To run a mutation, you first call `useAddOptionPollVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOptionPollVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOptionPollVoteMutation, { data, loading, error }] = useAddOptionPollVoteMutation({
 *   variables: {
 *      optionPollId: // value for 'optionPollId'
 *      userId: // value for 'userId'
 *      option: // value for 'option'
 *   },
 * });
 */
export function useAddOptionPollVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddOptionPollVoteMutation, AddOptionPollVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<AddOptionPollVoteMutation, AddOptionPollVoteMutationVariables>(AddOptionPollVoteDocument, baseOptions);
      }
export type AddOptionPollVoteMutationHookResult = ReturnType<typeof useAddOptionPollVoteMutation>;
export type AddOptionPollVoteMutationResult = ApolloReactCommon.MutationResult<AddOptionPollVoteMutation>;
export type AddOptionPollVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<AddOptionPollVoteMutation, AddOptionPollVoteMutationVariables>;
export const DeleteOptionPollVoteDocument = gql`
    mutation DeleteOptionPollVote($optionPollId: Int!, $userId: Int!) {
  delete_option_poll_votes(
    where: {_and: [{option_poll_id: {_eq: $optionPollId}}, {user_id: {_eq: $userId}}]}
  ) {
    affected_rows
  }
}
    `;
export type DeleteOptionPollVoteMutationFn = ApolloReactCommon.MutationFunction<DeleteOptionPollVoteMutation, DeleteOptionPollVoteMutationVariables>;

/**
 * __useDeleteOptionPollVoteMutation__
 *
 * To run a mutation, you first call `useDeleteOptionPollVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOptionPollVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOptionPollVoteMutation, { data, loading, error }] = useDeleteOptionPollVoteMutation({
 *   variables: {
 *      optionPollId: // value for 'optionPollId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteOptionPollVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOptionPollVoteMutation, DeleteOptionPollVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOptionPollVoteMutation, DeleteOptionPollVoteMutationVariables>(DeleteOptionPollVoteDocument, baseOptions);
      }
export type DeleteOptionPollVoteMutationHookResult = ReturnType<typeof useDeleteOptionPollVoteMutation>;
export type DeleteOptionPollVoteMutationResult = ApolloReactCommon.MutationResult<DeleteOptionPollVoteMutation>;
export type DeleteOptionPollVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOptionPollVoteMutation, DeleteOptionPollVoteMutationVariables>;
export const GetCouncilMembersDocument = gql`
    query getCouncilMembers {
  councils(last: 1) {
    members {
      id
      address
    }
  }
}
    `;

/**
 * __useGetCouncilMembersQuery__
 *
 * To run a query within a React component, call `useGetCouncilMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCouncilMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCouncilMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCouncilMembersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>(GetCouncilMembersDocument, baseOptions);
      }
export function useGetCouncilMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>(GetCouncilMembersDocument, baseOptions);
        }
export type GetCouncilMembersQueryHookResult = ReturnType<typeof useGetCouncilMembersQuery>;
export type GetCouncilMembersLazyQueryHookResult = ReturnType<typeof useGetCouncilMembersLazyQuery>;
export type GetCouncilMembersQueryResult = ApolloReactCommon.QueryResult<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>;
export const PollDocument = gql`
    query Poll($postId: Int!) {
  poll(where: {post_id: {_eq: $postId}}) {
    ...pollFields
  }
}
    ${PollFieldsFragmentDoc}`;

/**
 * __usePollQuery__
 *
 * To run a query within a React component, call `usePollQuery` and pass it any options that fit your needs.
 * When your component renders, `usePollQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePollQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePollQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PollQuery, PollQueryVariables>) {
        return ApolloReactHooks.useQuery<PollQuery, PollQueryVariables>(PollDocument, baseOptions);
      }
export function usePollLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PollQuery, PollQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PollQuery, PollQueryVariables>(PollDocument, baseOptions);
        }
export type PollQueryHookResult = ReturnType<typeof usePollQuery>;
export type PollLazyQueryHookResult = ReturnType<typeof usePollLazyQuery>;
export type PollQueryResult = ApolloReactCommon.QueryResult<PollQuery, PollQueryVariables>;
export const PollVotesDocument = gql`
    query PollVotes($pollId: Int!) {
  poll_votes(where: {poll_id: {_eq: $pollId}}) {
    ...pollVotesFields
  }
}
    ${PollVotesFieldsFragmentDoc}`;

/**
 * __usePollVotesQuery__
 *
 * To run a query within a React component, call `usePollVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePollVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePollVotesQuery({
 *   variables: {
 *      pollId: // value for 'pollId'
 *   },
 * });
 */
export function usePollVotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PollVotesQuery, PollVotesQueryVariables>) {
        return ApolloReactHooks.useQuery<PollVotesQuery, PollVotesQueryVariables>(PollVotesDocument, baseOptions);
      }
export function usePollVotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PollVotesQuery, PollVotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PollVotesQuery, PollVotesQueryVariables>(PollVotesDocument, baseOptions);
        }
export type PollVotesQueryHookResult = ReturnType<typeof usePollVotesQuery>;
export type PollVotesLazyQueryHookResult = ReturnType<typeof usePollVotesLazyQuery>;
export type PollVotesQueryResult = ApolloReactCommon.QueryResult<PollVotesQuery, PollVotesQueryVariables>;
export const AddPollVoteDocument = gql`
    mutation AddPollVote($pollId: Int!, $userId: Int!, $vote: bpchar!) {
  __typename
  insert_poll_votes_one(object: {poll_id: $pollId, user_id: $userId, vote: $vote}) {
    id
  }
}
    `;
export type AddPollVoteMutationFn = ApolloReactCommon.MutationFunction<AddPollVoteMutation, AddPollVoteMutationVariables>;

/**
 * __useAddPollVoteMutation__
 *
 * To run a mutation, you first call `useAddPollVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPollVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPollVoteMutation, { data, loading, error }] = useAddPollVoteMutation({
 *   variables: {
 *      pollId: // value for 'pollId'
 *      userId: // value for 'userId'
 *      vote: // value for 'vote'
 *   },
 * });
 */
export function useAddPollVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPollVoteMutation, AddPollVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPollVoteMutation, AddPollVoteMutationVariables>(AddPollVoteDocument, baseOptions);
      }
export const AddPolkassemblyProposalDocument = gql`
    mutation AddPolkassemblyProposal($authorId: Int!, $proposalId: Int!, $proposalType: Int!, $proposalHash: String!, $title: String!, $content: String!, $proposerAddress: String!) {
  __typename
  insert_polkassembly_proposals(
    objects: {author_id: $authorId, proposal_id: $proposalId, proposal_type: $proposalType, proposal_hash: $proposalHash, content: $content, title: $title, proposer_address: $proposerAddress}
  ) {
    affected_rows
  }
}
    `;
export type AddPolkassemblyProposalMutationFn = ApolloReactCommon.MutationFunction<AddPolkassemblyProposalMutation, AddPolkassemblyProposalMutationVariables>;

/**
 * __useAddPolkassemblyProposalMutation__
 *
 * To run a mutation, you first call `useAddPolkassemblyProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPolkassemblyProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPolkassemblyProposalMutation, { data, loading, error }] = useAddPolkassemblyProposalMutation({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      proposalId: // value for 'proposalId'
 *      proposalType: // value for 'proposalType'
 *      proposalHash: // value for 'proposalHash'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      proposerAddress: // value for 'proposerAddress'
 *   },
 * });
 */
export function useAddPolkassemblyProposalMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPolkassemblyProposalMutation, AddPolkassemblyProposalMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPolkassemblyProposalMutation, AddPolkassemblyProposalMutationVariables>(AddPolkassemblyProposalDocument, baseOptions);
      }
export type AddPolkassemblyProposalMutationHookResult = ReturnType<typeof useAddPolkassemblyProposalMutation>;
export type AddPolkassemblyProposalMutationResult = ApolloReactCommon.MutationResult<AddPolkassemblyProposalMutation>;
export type AddPolkassemblyProposalMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPolkassemblyProposalMutation, AddPolkassemblyProposalMutationVariables>;
export type AddPollVoteMutationHookResult = ReturnType<typeof useAddPollVoteMutation>;
export type AddPollVoteMutationResult = ApolloReactCommon.MutationResult<AddPollVoteMutation>;
export type AddPollVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPollVoteMutation, AddPollVoteMutationVariables>;
export const DeleteVoteDocument = gql`
    mutation DeleteVote($pollId: Int!, $userId: Int!) {
  delete_poll_votes(
    where: {_and: [{poll_id: {_eq: $pollId}}, {user_id: {_eq: $userId}}]}
  ) {
    affected_rows
  }
}
    `;
export type DeleteVoteMutationFn = ApolloReactCommon.MutationFunction<DeleteVoteMutation, DeleteVoteMutationVariables>;

/**
 * __useDeleteVoteMutation__
 *
 * To run a mutation, you first call `useDeleteVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVoteMutation, { data, loading, error }] = useDeleteVoteMutation({
 *   variables: {
 *      pollId: // value for 'pollId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteVoteMutation, DeleteVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteVoteMutation, DeleteVoteMutationVariables>(DeleteVoteDocument, baseOptions);
      }
export type DeleteVoteMutationHookResult = ReturnType<typeof useDeleteVoteMutation>;
export type DeleteVoteMutationResult = ApolloReactCommon.MutationResult<DeleteVoteMutation>;
export type DeleteVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteVoteMutation, DeleteVoteMutationVariables>;
export const CouncilAtBlockNumberDocument = gql`
    query councilAtBlockNumber($blockNumber: Int!) {
  councils(
    where: {blockNumber: {number_lte: $blockNumber}}
    orderBy: id_DESC
    first: 1
  ) {
    members {
      address
    }
  }
}
    `;

/**
 * __useCouncilAtBlockNumberQuery__
 *
 * To run a query within a React component, call `useCouncilAtBlockNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouncilAtBlockNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouncilAtBlockNumberQuery({
 *   variables: {
 *      blockNumber: // value for 'blockNumber'
 *   },
 * });
 */
export function useCouncilAtBlockNumberQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CouncilAtBlockNumberQuery, CouncilAtBlockNumberQueryVariables>) {
        return ApolloReactHooks.useQuery<CouncilAtBlockNumberQuery, CouncilAtBlockNumberQueryVariables>(CouncilAtBlockNumberDocument, baseOptions);
      }
export function useCouncilAtBlockNumberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CouncilAtBlockNumberQuery, CouncilAtBlockNumberQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CouncilAtBlockNumberQuery, CouncilAtBlockNumberQueryVariables>(CouncilAtBlockNumberDocument, baseOptions);
        }
export type CouncilAtBlockNumberQueryHookResult = ReturnType<typeof useCouncilAtBlockNumberQuery>;
export type CouncilAtBlockNumberLazyQueryHookResult = ReturnType<typeof useCouncilAtBlockNumberLazyQuery>;
export type CouncilAtBlockNumberQueryResult = ApolloReactCommon.QueryResult<CouncilAtBlockNumberQuery, CouncilAtBlockNumberQueryVariables>;
export const EditPollDocument = gql`
    mutation EditPoll($id: Int!, $blockEnd: Int!) {
  update_poll(where: {id: {_eq: $id}}, _set: {block_end: $blockEnd}) {
    affected_rows
  }
}
    `;
export type EditPollMutationFn = ApolloReactCommon.MutationFunction<EditPollMutation, EditPollMutationVariables>;

/**
 * __useEditPollMutation__
 *
 * To run a mutation, you first call `useEditPollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPollMutation, { data, loading, error }] = useEditPollMutation({
 *   variables: {
 *      id: // value for 'id'
 *      blockEnd: // value for 'blockEnd'
 *   },
 * });
 */
export function useEditPollMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditPollMutation, EditPollMutationVariables>) {
        return ApolloReactHooks.useMutation<EditPollMutation, EditPollMutationVariables>(EditPollDocument, baseOptions);
      }
export type EditPollMutationHookResult = ReturnType<typeof useEditPollMutation>;
export type EditPollMutationResult = ApolloReactCommon.MutationResult<EditPollMutation>;
export type EditPollMutationOptions = ApolloReactCommon.BaseMutationOptions<EditPollMutation, EditPollMutationVariables>;
export const EditPostDocument = gql`
    mutation EditPost($id: Int!, $content: String!, $title: String!) {
  update_posts(where: {id: {_eq: $id}}, _set: {content: $content, title: $title}) {
    affected_rows
  }
}
    `;
export type EditPostMutationFn = ApolloReactCommon.MutationFunction<EditPostMutation, EditPostMutationVariables>;

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useEditPostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        return ApolloReactHooks.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, baseOptions);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = ApolloReactCommon.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = ApolloReactCommon.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const AddPostCommentDocument = gql`
    mutation AddPostComment($authorId: Int!, $content: String!, $postId: Int!) {
  __typename
  insert_comments(
    objects: {author_id: $authorId, content: $content, post_id: $postId}
  ) {
    affected_rows
  }
}
    `;
export type AddPostCommentMutationFn = ApolloReactCommon.MutationFunction<AddPostCommentMutation, AddPostCommentMutationVariables>;

/**
 * __useAddPostCommentMutation__
 *
 * To run a mutation, you first call `useAddPostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostCommentMutation, { data, loading, error }] = useAddPostCommentMutation({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      content: // value for 'content'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddPostCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostCommentMutation, AddPostCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPostCommentMutation, AddPostCommentMutationVariables>(AddPostCommentDocument, baseOptions);
      }
export type AddPostCommentMutationHookResult = ReturnType<typeof useAddPostCommentMutation>;
export type AddPostCommentMutationResult = ApolloReactCommon.MutationResult<AddPostCommentMutation>;
export type AddPostCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostCommentMutation, AddPostCommentMutationVariables>;
export const EditCommentReplyDocument = gql`
    mutation EditCommentReply($id: uuid!, $content: String!) {
  update_replies(where: {id: {_eq: $id}}, _set: {content: $content}) {
    affected_rows
  }
}
    `;
export type EditCommentReplyMutationFn = ApolloReactCommon.MutationFunction<EditCommentReplyMutation, EditCommentReplyMutationVariables>;

/**
 * __useEditCommentReplyMutation__
 *
 * To run a mutation, you first call `useEditCommentReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentReplyMutation, { data, loading, error }] = useEditCommentReplyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useEditCommentReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCommentReplyMutation, EditCommentReplyMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCommentReplyMutation, EditCommentReplyMutationVariables>(EditCommentReplyDocument, baseOptions);
      }
export type EditCommentReplyMutationHookResult = ReturnType<typeof useEditCommentReplyMutation>;
export type EditCommentReplyMutationResult = ApolloReactCommon.MutationResult<EditCommentReplyMutation>;
export type EditCommentReplyMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommentReplyMutation, EditCommentReplyMutationVariables>;
export const DeleteCommentReplyDocument = gql`
    mutation DeleteCommentReply($id: uuid!) {
  delete_replies(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type DeleteCommentReplyMutationFn = ApolloReactCommon.MutationFunction<DeleteCommentReplyMutation, DeleteCommentReplyMutationVariables>;

/**
 * __useDeleteCommentReplyMutation__
 *
 * To run a mutation, you first call `useDeleteCommentReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentReplyMutation, { data, loading, error }] = useDeleteCommentReplyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCommentReplyMutation, DeleteCommentReplyMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCommentReplyMutation, DeleteCommentReplyMutationVariables>(DeleteCommentReplyDocument, baseOptions);
      }
export type DeleteCommentReplyMutationHookResult = ReturnType<typeof useDeleteCommentReplyMutation>;
export type DeleteCommentReplyMutationResult = ApolloReactCommon.MutationResult<DeleteCommentReplyMutation>;
export type DeleteCommentReplyMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCommentReplyMutation, DeleteCommentReplyMutationVariables>;
export const PostReactionsDocument = gql`
    query PostReactions($postId: Int!) {
  post_reactions(where: {post_id: {_eq: $postId}}) {
    ...postReactionFields
  }
}
    ${PostReactionFieldsFragmentDoc}`;

/**
 * __usePostReactionsQuery__
 *
 * To run a query within a React component, call `usePostReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostReactionsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostReactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostReactionsQuery, PostReactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostReactionsQuery, PostReactionsQueryVariables>(PostReactionsDocument, baseOptions);
      }
export function usePostReactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostReactionsQuery, PostReactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostReactionsQuery, PostReactionsQueryVariables>(PostReactionsDocument, baseOptions);
        }
export type PostReactionsQueryHookResult = ReturnType<typeof usePostReactionsQuery>;
export type PostReactionsLazyQueryHookResult = ReturnType<typeof usePostReactionsLazyQuery>;
export type PostReactionsQueryResult = ApolloReactCommon.QueryResult<PostReactionsQuery, PostReactionsQueryVariables>;
export const CommentReactionsDocument = gql`
    query CommentReactions($commentId: uuid!) {
  comment_reactions(where: {comment_id: {_eq: $commentId}}) {
    ...commentReactionFields
  }
}
    ${CommentReactionFieldsFragmentDoc}`;

/**
 * __useCommentReactionsQuery__
 *
 * To run a query within a React component, call `useCommentReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentReactionsQuery({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useCommentReactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommentReactionsQuery, CommentReactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommentReactionsQuery, CommentReactionsQueryVariables>(CommentReactionsDocument, baseOptions);
      }
export function useCommentReactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommentReactionsQuery, CommentReactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommentReactionsQuery, CommentReactionsQueryVariables>(CommentReactionsDocument, baseOptions);
        }
export type CommentReactionsQueryHookResult = ReturnType<typeof useCommentReactionsQuery>;
export type CommentReactionsLazyQueryHookResult = ReturnType<typeof useCommentReactionsLazyQuery>;
export type CommentReactionsQueryResult = ApolloReactCommon.QueryResult<CommentReactionsQuery, CommentReactionsQueryVariables>;
export const AddPostReactionDocument = gql`
    mutation AddPostReaction($postId: Int!, $userId: Int!, $reaction: bpchar!) {
  __typename
  insert_post_reactions(
    objects: {post_id: $postId, user_id: $userId, reaction: $reaction}
  ) {
    affected_rows
  }
}
    `;
export type AddPostReactionMutationFn = ApolloReactCommon.MutationFunction<AddPostReactionMutation, AddPostReactionMutationVariables>;

/**
 * __useAddPostReactionMutation__
 *
 * To run a mutation, you first call `useAddPostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostReactionMutation, { data, loading, error }] = useAddPostReactionMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useAddPostReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostReactionMutation, AddPostReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPostReactionMutation, AddPostReactionMutationVariables>(AddPostReactionDocument, baseOptions);
      }
export type AddPostReactionMutationHookResult = ReturnType<typeof useAddPostReactionMutation>;
export type AddPostReactionMutationResult = ApolloReactCommon.MutationResult<AddPostReactionMutation>;
export type AddPostReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostReactionMutation, AddPostReactionMutationVariables>;
export const AddCommentReactionDocument = gql`
    mutation AddCommentReaction($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
  __typename
  insert_comment_reactions(
    objects: {comment_id: $commentId, user_id: $userId, reaction: $reaction}
  ) {
    affected_rows
  }
}
    `;
export type AddCommentReactionMutationFn = ApolloReactCommon.MutationFunction<AddCommentReactionMutation, AddCommentReactionMutationVariables>;

/**
 * __useAddCommentReactionMutation__
 *
 * To run a mutation, you first call `useAddCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentReactionMutation, { data, loading, error }] = useAddCommentReactionMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useAddCommentReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommentReactionMutation, AddCommentReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommentReactionMutation, AddCommentReactionMutationVariables>(AddCommentReactionDocument, baseOptions);
      }
export type AddCommentReactionMutationHookResult = ReturnType<typeof useAddCommentReactionMutation>;
export type AddCommentReactionMutationResult = ApolloReactCommon.MutationResult<AddCommentReactionMutation>;
export type AddCommentReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentReactionMutation, AddCommentReactionMutationVariables>;
export const DeletePostReactionDocument = gql`
    mutation DeletePostReaction($postId: Int!, $userId: Int!, $reaction: bpchar!) {
  delete_post_reactions(
    where: {_and: [{post_id: {_eq: $postId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}
  ) {
    affected_rows
  }
}
    `;
export type DeletePostReactionMutationFn = ApolloReactCommon.MutationFunction<DeletePostReactionMutation, DeletePostReactionMutationVariables>;

/**
 * __useDeletePostReactionMutation__
 *
 * To run a mutation, you first call `useDeletePostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostReactionMutation, { data, loading, error }] = useDeletePostReactionMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useDeletePostReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePostReactionMutation, DeletePostReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePostReactionMutation, DeletePostReactionMutationVariables>(DeletePostReactionDocument, baseOptions);
      }
export type DeletePostReactionMutationHookResult = ReturnType<typeof useDeletePostReactionMutation>;
export type DeletePostReactionMutationResult = ApolloReactCommon.MutationResult<DeletePostReactionMutation>;
export type DeletePostReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePostReactionMutation, DeletePostReactionMutationVariables>;
export const DeleteCommentReactionDocument = gql`
    mutation DeleteCommentReaction($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
  delete_comment_reactions(
    where: {_and: [{comment_id: {_eq: $commentId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}
  ) {
    affected_rows
  }
}
    `;
export type DeleteCommentReactionMutationFn = ApolloReactCommon.MutationFunction<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;

/**
 * __useDeleteCommentReactionMutation__
 *
 * To run a mutation, you first call `useDeleteCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentReactionMutation, { data, loading, error }] = useDeleteCommentReactionMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useDeleteCommentReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>(DeleteCommentReactionDocument, baseOptions);
      }
export type DeleteCommentReactionMutationHookResult = ReturnType<typeof useDeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationResult = ApolloReactCommon.MutationResult<DeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;
export const ReportContentDocument = gql`
    mutation ReportContent($network: String!, $type: String!, $content_id: String!, $reason: String!, $comments: String!) {
  reportContent(
    network: $network
    type: $type
    content_id: $content_id
    reason: $reason
    comments: $comments
  ) {
    message
  }
}
    `;
export type ReportContentMutationFn = ApolloReactCommon.MutationFunction<ReportContentMutation, ReportContentMutationVariables>;

/**
 * __useReportContentMutation__
 *
 * To run a mutation, you first call `useReportContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportContentMutation, { data, loading, error }] = useReportContentMutation({
 *   variables: {
 *      network: // value for 'network'
 *      type: // value for 'type'
 *      content_id: // value for 'content_id'
 *      reason: // value for 'reason'
 *      comments: // value for 'comments'
 *   },
 * });
 */
export function useReportContentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReportContentMutation, ReportContentMutationVariables>) {
        return ApolloReactHooks.useMutation<ReportContentMutation, ReportContentMutationVariables>(ReportContentDocument, baseOptions);
      }
export type ReportContentMutationHookResult = ReturnType<typeof useReportContentMutation>;
export type ReportContentMutationResult = ApolloReactCommon.MutationResult<ReportContentMutation>;
export type ReportContentMutationOptions = ApolloReactCommon.BaseMutationOptions<ReportContentMutation, ReportContentMutationVariables>;
export const SignupDocument = gql`
    mutation SIGNUP($email: String, $password: String!, $username: String!) {
  signup(email: $email, password: $password, username: $username) {
    token
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const AddressSignupStartDocument = gql`
    mutation AddressSignupStart($address: String!) {
  addressSignupStart(address: $address) {
    message
    signMessage
  }
}
    `;
export type AddressSignupStartMutationFn = ApolloReactCommon.MutationFunction<AddressSignupStartMutation, AddressSignupStartMutationVariables>;

/**
 * __useAddressSignupStartMutation__
 *
 * To run a mutation, you first call `useAddressSignupStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressSignupStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressSignupStartMutation, { data, loading, error }] = useAddressSignupStartMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressSignupStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressSignupStartMutation, AddressSignupStartMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressSignupStartMutation, AddressSignupStartMutationVariables>(AddressSignupStartDocument, baseOptions);
      }
export type AddressSignupStartMutationHookResult = ReturnType<typeof useAddressSignupStartMutation>;
export type AddressSignupStartMutationResult = ApolloReactCommon.MutationResult<AddressSignupStartMutation>;
export type AddressSignupStartMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressSignupStartMutation, AddressSignupStartMutationVariables>;
export const AddressSignupConfirmDocument = gql`
    mutation AddressSignupConfirm($network: String!, $address: String!, $signature: String!) {
  addressSignupConfirm(
    network: $network
    address: $address
    signature: $signature
  ) {
    token
  }
}
    `;
export type AddressSignupConfirmMutationFn = ApolloReactCommon.MutationFunction<AddressSignupConfirmMutation, AddressSignupConfirmMutationVariables>;

/**
 * __useAddressSignupConfirmMutation__
 *
 * To run a mutation, you first call `useAddressSignupConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressSignupConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressSignupConfirmMutation, { data, loading, error }] = useAddressSignupConfirmMutation({
 *   variables: {
 *      network: // value for 'network'
 *      address: // value for 'address'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useAddressSignupConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressSignupConfirmMutation, AddressSignupConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressSignupConfirmMutation, AddressSignupConfirmMutationVariables>(AddressSignupConfirmDocument, baseOptions);
      }
export type AddressSignupConfirmMutationHookResult = ReturnType<typeof useAddressSignupConfirmMutation>;
export type AddressSignupConfirmMutationResult = ApolloReactCommon.MutationResult<AddressSignupConfirmMutation>;
export type AddressSignupConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressSignupConfirmMutation, AddressSignupConfirmMutationVariables>;
export const PostSubscribeDocument = gql`
    mutation PostSubscribe($postId: Int!) {
  postSubscribe(post_id: $postId) {
    message
  }
}
    `;
export type PostSubscribeMutationFn = ApolloReactCommon.MutationFunction<PostSubscribeMutation, PostSubscribeMutationVariables>;

/**
 * __usePostSubscribeMutation__
 *
 * To run a mutation, you first call `usePostSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSubscribeMutation, { data, loading, error }] = usePostSubscribeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostSubscribeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostSubscribeMutation, PostSubscribeMutationVariables>) {
        return ApolloReactHooks.useMutation<PostSubscribeMutation, PostSubscribeMutationVariables>(PostSubscribeDocument, baseOptions);
      }
export type PostSubscribeMutationHookResult = ReturnType<typeof usePostSubscribeMutation>;
export type PostSubscribeMutationResult = ApolloReactCommon.MutationResult<PostSubscribeMutation>;
export type PostSubscribeMutationOptions = ApolloReactCommon.BaseMutationOptions<PostSubscribeMutation, PostSubscribeMutationVariables>;
export const PostUnsubscribeDocument = gql`
    mutation PostUnsubscribe($postId: Int!) {
  postUnsubscribe(post_id: $postId) {
    message
  }
}
    `;
export type PostUnsubscribeMutationFn = ApolloReactCommon.MutationFunction<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>;

/**
 * __usePostUnsubscribeMutation__
 *
 * To run a mutation, you first call `usePostUnsubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUnsubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUnsubscribeMutation, { data, loading, error }] = usePostUnsubscribeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostUnsubscribeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>) {
        return ApolloReactHooks.useMutation<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>(PostUnsubscribeDocument, baseOptions);
      }
export type PostUnsubscribeMutationHookResult = ReturnType<typeof usePostUnsubscribeMutation>;
export type PostUnsubscribeMutationResult = ApolloReactCommon.MutationResult<PostUnsubscribeMutation>;
export type PostUnsubscribeMutationOptions = ApolloReactCommon.BaseMutationOptions<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>;
export const SubscriptionDocument = gql`
    query Subscription($postId: Int!) {
  subscription(post_id: $postId) {
    subscribed
  }
}
    `;

/**
 * __useSubscriptionQuery__
 *
 * To run a query within a React component, call `useSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useSubscriptionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SubscriptionQuery, SubscriptionQueryVariables>) {
        return ApolloReactHooks.useQuery<SubscriptionQuery, SubscriptionQueryVariables>(SubscriptionDocument, baseOptions);
      }
export function useSubscriptionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SubscriptionQuery, SubscriptionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SubscriptionQuery, SubscriptionQueryVariables>(SubscriptionDocument, baseOptions);
        }
export type SubscriptionQueryHookResult = ReturnType<typeof useSubscriptionQuery>;
export type SubscriptionLazyQueryHookResult = ReturnType<typeof useSubscriptionLazyQuery>;
export type SubscriptionQueryResult = ApolloReactCommon.QueryResult<SubscriptionQuery, SubscriptionQueryVariables>;
export const Get_Refresh_TokenDocument = gql`
    query GET_REFRESH_TOKEN {
  token {
    token
  }
}
    `;

/**
 * __useGet_Refresh_TokenQuery__
 *
 * To run a query within a React component, call `useGet_Refresh_TokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Refresh_TokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Refresh_TokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Refresh_TokenQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>) {
        return ApolloReactHooks.useQuery<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>(Get_Refresh_TokenDocument, baseOptions);
      }
export function useGet_Refresh_TokenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>(Get_Refresh_TokenDocument, baseOptions);
        }
export type Get_Refresh_TokenQueryHookResult = ReturnType<typeof useGet_Refresh_TokenQuery>;
export type Get_Refresh_TokenLazyQueryHookResult = ReturnType<typeof useGet_Refresh_TokenLazyQuery>;
export type Get_Refresh_TokenQueryResult = ApolloReactCommon.QueryResult<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>;
export const AllBountyPostsDocument = gql`
    query AllBountyPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_bounty_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
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
      onchain_bounty_id
      onchain_bounty(where: {}) {
        id
        value
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllBountyPostsQuery__
 *
 * To run a query within a React component, call `useAllBountyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBountyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBountyPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllBountyPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllBountyPostsQuery, AllBountyPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllBountyPostsQuery, AllBountyPostsQueryVariables>(AllBountyPostsDocument, baseOptions);
      }
export function useAllBountyPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllBountyPostsQuery, AllBountyPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllBountyPostsQuery, AllBountyPostsQueryVariables>(AllBountyPostsDocument, baseOptions);
        }
export type AllBountyPostsQueryHookResult = ReturnType<typeof useAllBountyPostsQuery>;
export type AllBountyPostsLazyQueryHookResult = ReturnType<typeof useAllBountyPostsLazyQuery>;
export type AllBountyPostsQueryResult = ApolloReactCommon.QueryResult<AllBountyPostsQuery, AllBountyPostsQueryVariables>;
export const BountyPostAndCommentsDocument = gql`
    query BountyPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_bounty_id: {_eq: $id}}}) {
    ...bountyPost
  }
}
    ${BountyPostFragmentDoc}`;

/**
 * __useBountyPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useBountyPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBountyPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBountyPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBountyPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BountyPostAndCommentsQuery, BountyPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<BountyPostAndCommentsQuery, BountyPostAndCommentsQueryVariables>(BountyPostAndCommentsDocument, baseOptions);
      }
export function useBountyPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BountyPostAndCommentsQuery, BountyPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BountyPostAndCommentsQuery, BountyPostAndCommentsQueryVariables>(BountyPostAndCommentsDocument, baseOptions);
        }
export type BountyPostAndCommentsQueryHookResult = ReturnType<typeof useBountyPostAndCommentsQuery>;
export type BountyPostAndCommentsLazyQueryHookResult = ReturnType<typeof useBountyPostAndCommentsLazyQuery>;
export type BountyPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<BountyPostAndCommentsQuery, BountyPostAndCommentsQueryVariables>;
export const AllMotionPostsDocument = gql`
    query AllMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
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
      onchain_motion_id
      onchain_motion(where: {}) {
        id
        motionStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllMotionPostsQuery__
 *
 * To run a query within a React component, call `useAllMotionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMotionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMotionPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllMotionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllMotionPostsQuery, AllMotionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllMotionPostsQuery, AllMotionPostsQueryVariables>(AllMotionPostsDocument, baseOptions);
      }
export function useAllMotionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllMotionPostsQuery, AllMotionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllMotionPostsQuery, AllMotionPostsQueryVariables>(AllMotionPostsDocument, baseOptions);
        }
export type AllMotionPostsQueryHookResult = ReturnType<typeof useAllMotionPostsQuery>;
export type AllMotionPostsLazyQueryHookResult = ReturnType<typeof useAllMotionPostsLazyQuery>;
export type AllMotionPostsQueryResult = ApolloReactCommon.QueryResult<AllMotionPostsQuery, AllMotionPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation createPost($userId: Int!, $content: String!, $topicId: Int!, $title: String!) {
  __typename
  insert_posts(
    objects: {author_id: $userId, content: $content, title: $title, topic_id: $topicId}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      content: // value for 'content'
 *      topicId: // value for 'topicId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreatePollDocument = gql`
    mutation createPoll($postId: Int!, $blockEnd: Int!) {
  __typename
  insert_poll(objects: {post_id: $postId, block_end: $blockEnd}) {
    affected_rows
  }
}
    `;
export type CreatePollMutationFn = ApolloReactCommon.MutationFunction<CreatePollMutation, CreatePollMutationVariables>;

/**
 * __useCreatePollMutation__
 *
 * To run a mutation, you first call `useCreatePollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPollMutation, { data, loading, error }] = useCreatePollMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      blockEnd: // value for 'blockEnd'
 *   },
 * });
 */
export function useCreatePollMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePollMutation, CreatePollMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePollMutation, CreatePollMutationVariables>(CreatePollDocument, baseOptions);
      }
export type CreatePollMutationHookResult = ReturnType<typeof useCreatePollMutation>;
export type CreatePollMutationResult = ApolloReactCommon.MutationResult<CreatePollMutation>;
export type CreatePollMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePollMutation, CreatePollMutationVariables>;
export const Post_TopicsDocument = gql`
    query Post_topics {
  post_topics {
    ...topic
  }
}
    ${TopicFragmentDoc}`;

/**
 * __usePost_TopicsQuery__
 *
 * To run a query within a React component, call `usePost_TopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePost_TopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePost_TopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePost_TopicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Post_TopicsQuery, Post_TopicsQueryVariables>) {
        return ApolloReactHooks.useQuery<Post_TopicsQuery, Post_TopicsQueryVariables>(Post_TopicsDocument, baseOptions);
      }
export function usePost_TopicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Post_TopicsQuery, Post_TopicsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Post_TopicsQuery, Post_TopicsQueryVariables>(Post_TopicsDocument, baseOptions);
        }
export type Post_TopicsQueryHookResult = ReturnType<typeof usePost_TopicsQuery>;
export type Post_TopicsLazyQueryHookResult = ReturnType<typeof usePost_TopicsLazyQuery>;
export type Post_TopicsQueryResult = ApolloReactCommon.QueryResult<Post_TopicsQuery, Post_TopicsQueryVariables>;
export const DiscussionPostAndCommentsDocument = gql`
    query DiscussionPostAndComments($id: Int!) {
  posts(where: {id: {_eq: $id}}) {
    ...discussionPost
  }
}
    ${DiscussionPostFragmentDoc}`;

/**
 * __useDiscussionPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useDiscussionPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscussionPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscussionPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDiscussionPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>(DiscussionPostAndCommentsDocument, baseOptions);
      }
export function useDiscussionPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>(DiscussionPostAndCommentsDocument, baseOptions);
        }
export type DiscussionPostAndCommentsQueryHookResult = ReturnType<typeof useDiscussionPostAndCommentsQuery>;
export type DiscussionPostAndCommentsLazyQueryHookResult = ReturnType<typeof useDiscussionPostAndCommentsLazyQuery>;
export type DiscussionPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>;
export const LatestDiscussionPostsDocument = gql`
    query LatestDiscussionPosts($limit: Int! = 20) {
  posts(
    order_by: {last_update: {last_update: desc}}
    limit: $limit
    where: {type: {id: {_eq: 1}}}
  ) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useLatestDiscussionPostsQuery__
 *
 * To run a query within a React component, call `useLatestDiscussionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestDiscussionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestDiscussionPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestDiscussionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>(LatestDiscussionPostsDocument, baseOptions);
      }
export function useLatestDiscussionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>(LatestDiscussionPostsDocument, baseOptions);
        }
export type LatestDiscussionPostsQueryHookResult = ReturnType<typeof useLatestDiscussionPostsQuery>;
export type LatestDiscussionPostsLazyQueryHookResult = ReturnType<typeof useLatestDiscussionPostsLazyQuery>;
export type LatestDiscussionPostsQueryResult = ApolloReactCommon.QueryResult<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>;
export const DiscussionPostsIdDescDocument = gql`
    query DiscussionPostsIdDesc($limit: Int! = 20) {
  posts(order_by: {id: desc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useDiscussionPostsIdDescQuery__
 *
 * To run a query within a React component, call `useDiscussionPostsIdDescQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscussionPostsIdDescQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscussionPostsIdDescQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useDiscussionPostsIdDescQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DiscussionPostsIdDescQuery, DiscussionPostsIdDescQueryVariables>) {
        return ApolloReactHooks.useQuery<DiscussionPostsIdDescQuery, DiscussionPostsIdDescQueryVariables>(DiscussionPostsIdDescDocument, baseOptions);
      }
export function useDiscussionPostsIdDescLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DiscussionPostsIdDescQuery, DiscussionPostsIdDescQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DiscussionPostsIdDescQuery, DiscussionPostsIdDescQueryVariables>(DiscussionPostsIdDescDocument, baseOptions);
        }
export type DiscussionPostsIdDescQueryHookResult = ReturnType<typeof useDiscussionPostsIdDescQuery>;
export type DiscussionPostsIdDescLazyQueryHookResult = ReturnType<typeof useDiscussionPostsIdDescLazyQuery>;
export type DiscussionPostsIdDescQueryResult = ApolloReactCommon.QueryResult<DiscussionPostsIdDescQuery, DiscussionPostsIdDescQueryVariables>;
export const DiscussionPostsIdAscDocument = gql`
    query DiscussionPostsIdAsc($limit: Int! = 20) {
  posts(order_by: {id: asc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useDiscussionPostsIdAscQuery__
 *
 * To run a query within a React component, call `useDiscussionPostsIdAscQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscussionPostsIdAscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscussionPostsIdAscQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useDiscussionPostsIdAscQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DiscussionPostsIdAscQuery, DiscussionPostsIdAscQueryVariables>) {
        return ApolloReactHooks.useQuery<DiscussionPostsIdAscQuery, DiscussionPostsIdAscQueryVariables>(DiscussionPostsIdAscDocument, baseOptions);
      }
export function useDiscussionPostsIdAscLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DiscussionPostsIdAscQuery, DiscussionPostsIdAscQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DiscussionPostsIdAscQuery, DiscussionPostsIdAscQueryVariables>(DiscussionPostsIdAscDocument, baseOptions);
        }
export type DiscussionPostsIdAscQueryHookResult = ReturnType<typeof useDiscussionPostsIdAscQuery>;
export type DiscussionPostsIdAscLazyQueryHookResult = ReturnType<typeof useDiscussionPostsIdAscLazyQuery>;
export type DiscussionPostsIdAscQueryResult = ApolloReactCommon.QueryResult<DiscussionPostsIdAscQuery, DiscussionPostsIdAscQueryVariables>;
export const MotionPostAndCommentsDocument = gql`
    query MotionPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_motion_id: {_eq: $id}}}) {
    ...motionPost
  }
}
    ${MotionPostFragmentDoc}`;

/**
 * __useMotionPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useMotionPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMotionPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMotionPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMotionPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>(MotionPostAndCommentsDocument, baseOptions);
      }
export function useMotionPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>(MotionPostAndCommentsDocument, baseOptions);
        }
export type MotionPostAndCommentsQueryHookResult = ReturnType<typeof useMotionPostAndCommentsQuery>;
export type MotionPostAndCommentsLazyQueryHookResult = ReturnType<typeof useMotionPostAndCommentsLazyQuery>;
export type MotionPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>;
export const ChangeNotificationPreferenceDocument = gql`
    mutation changeNotificationPreference($postParticipated: Boolean, $postCreated: Boolean, $newProposal: Boolean, $ownProposal: Boolean) {
  changeNotificationPreference(
    notificationPreferences: {postParticipated: $postParticipated, postCreated: $postCreated, newProposal: $newProposal, ownProposal: $ownProposal}
  ) {
    message
    token
  }
}
    `;
export type ChangeNotificationPreferenceMutationFn = ApolloReactCommon.MutationFunction<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>;

/**
 * __useChangeNotificationPreferenceMutation__
 *
 * To run a mutation, you first call `useChangeNotificationPreferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeNotificationPreferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeNotificationPreferenceMutation, { data, loading, error }] = useChangeNotificationPreferenceMutation({
 *   variables: {
 *      postParticipated: // value for 'postParticipated'
 *      postCreated: // value for 'postCreated'
 *      newProposal: // value for 'newProposal'
 *      ownProposal: // value for 'ownProposal'
 *   },
 * });
 */
export function useChangeNotificationPreferenceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>(ChangeNotificationPreferenceDocument, baseOptions);
      }
export type ChangeNotificationPreferenceMutationHookResult = ReturnType<typeof useChangeNotificationPreferenceMutation>;
export type ChangeNotificationPreferenceMutationResult = ApolloReactCommon.MutationResult<ChangeNotificationPreferenceMutation>;
export type ChangeNotificationPreferenceMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>;
export const LatestBountyPostsDocument = gql`
    query LatestBountyPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_bounty_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_bounty_id: desc}}
  ) {
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
      onchain_bounty_id
      onchain_bounty(
        where: {NOT: {bountyStatus_some: {OR: [{status: "BountyCanceled"}, {status: "BountyRejected"}, {status: "BountyAwarded"}, {status: "BountyClaimed"}]}}}
      ) {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestBountyPostsQuery__
 *
 * To run a query within a React component, call `useLatestBountyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBountyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBountyPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestBountyPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestBountyPostsQuery, LatestBountyPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestBountyPostsQuery, LatestBountyPostsQueryVariables>(LatestBountyPostsDocument, baseOptions);
      }
export function useLatestBountyPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestBountyPostsQuery, LatestBountyPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestBountyPostsQuery, LatestBountyPostsQueryVariables>(LatestBountyPostsDocument, baseOptions);
        }
export type LatestBountyPostsQueryHookResult = ReturnType<typeof useLatestBountyPostsQuery>;
export type LatestBountyPostsLazyQueryHookResult = ReturnType<typeof useLatestBountyPostsLazyQuery>;
export type LatestBountyPostsQueryResult = ApolloReactCommon.QueryResult<LatestBountyPostsQuery, LatestBountyPostsQueryVariables>;
export const BountiesCountDocument = gql`
    query BountiesCount($postType: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_bounty_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useBountiesCountQuery__
 *
 * To run a query within a React component, call `useBountiesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useBountiesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBountiesCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *   },
 * });
 */
export function useBountiesCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BountiesCountQuery, BountiesCountQueryVariables>) {
        return ApolloReactHooks.useQuery<BountiesCountQuery, BountiesCountQueryVariables>(BountiesCountDocument, baseOptions);
      }
export function useBountiesCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BountiesCountQuery, BountiesCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BountiesCountQuery, BountiesCountQueryVariables>(BountiesCountDocument, baseOptions);
        }
export type BountiesCountQueryHookResult = ReturnType<typeof useBountiesCountQuery>;
export type BountiesCountLazyQueryHookResult = ReturnType<typeof useBountiesCountLazyQuery>;
export type BountiesCountQueryResult = ApolloReactCommon.QueryResult<BountiesCountQuery, BountiesCountQueryVariables>;
export const LatestMotionPostsDocument = gql`
    query LatestMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}, onchain_referendum_id: {_is_null: true}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
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
      onchain_motion_id
      onchain_motion(
        where: {NOT: {motionStatus_some: {OR: [{status: "Executed"}, {status: "Disapproved"}]}}}
      ) {
        id
        motionStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestMotionPostsQuery__
 *
 * To run a query within a React component, call `useLatestMotionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestMotionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestMotionPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestMotionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>(LatestMotionPostsDocument, baseOptions);
      }
export function useLatestMotionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>(LatestMotionPostsDocument, baseOptions);
        }
export type LatestMotionPostsQueryHookResult = ReturnType<typeof useLatestMotionPostsQuery>;
export type LatestMotionPostsLazyQueryHookResult = ReturnType<typeof useLatestMotionPostsLazyQuery>;
export type LatestMotionPostsQueryResult = ApolloReactCommon.QueryResult<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>;
export const LatestMotionsCountDocument = gql`
    query LatestMotionsCount($postType: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: true}, onchain_motion_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useLatestMotionsCountQuery__
 *
 * To run a query within a React component, call `useLatestMotionsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestMotionsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestMotionsCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *   },
 * });
 */
export function useLatestMotionsCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestMotionsCountQuery, LatestMotionsCountQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestMotionsCountQuery, LatestMotionsCountQueryVariables>(LatestMotionsCountDocument, baseOptions);
      }
export function useLatestMotionsCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestMotionsCountQuery, LatestMotionsCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestMotionsCountQuery, LatestMotionsCountQueryVariables>(LatestMotionsCountDocument, baseOptions);
        }
export type LatestMotionsCountQueryHookResult = ReturnType<typeof useLatestMotionsCountQuery>;
export type LatestMotionsCountLazyQueryHookResult = ReturnType<typeof useLatestMotionsCountLazyQuery>;
export type LatestMotionsCountQueryResult = ApolloReactCommon.QueryResult<LatestMotionsCountQuery, LatestMotionsCountQueryVariables>;
export const LatestDemocracyProposalPostsDocument = gql`
    query LatestDemocracyProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
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
      onchain_proposal_id
      onchain_proposal(
        where: {NOT: {proposalStatus_some: {OR: [{status: "Tabled"}, {status: "Cleared"}]}}}
      ) {
        id
        proposalStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestDemocracyProposalPostsQuery__
 *
 * To run a query within a React component, call `useLatestDemocracyProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestDemocracyProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestDemocracyProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestDemocracyProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>(LatestDemocracyProposalPostsDocument, baseOptions);
      }
export function useLatestDemocracyProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>(LatestDemocracyProposalPostsDocument, baseOptions);
        }
export type LatestDemocracyProposalPostsQueryHookResult = ReturnType<typeof useLatestDemocracyProposalPostsQuery>;
export type LatestDemocracyProposalPostsLazyQueryHookResult = ReturnType<typeof useLatestDemocracyProposalPostsLazyQuery>;
export type LatestDemocracyProposalPostsQueryResult = ApolloReactCommon.QueryResult<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>;
export const DemocracyProposalCountDocument = gql`
    query DemocracyProposalCount($postType: Int!, $postTopic: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useDemocracyProposalCountQuery__
 *
 * To run a query within a React component, call `useDemocracyProposalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDemocracyProposalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemocracyProposalCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *   },
 * });
 */
export function useDemocracyProposalCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DemocracyProposalCountQuery, DemocracyProposalCountQueryVariables>) {
        return ApolloReactHooks.useQuery<DemocracyProposalCountQuery, DemocracyProposalCountQueryVariables>(DemocracyProposalCountDocument, baseOptions);
      }
export function useDemocracyProposalCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DemocracyProposalCountQuery, DemocracyProposalCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DemocracyProposalCountQuery, DemocracyProposalCountQueryVariables>(DemocracyProposalCountDocument, baseOptions);
        }
export type DemocracyProposalCountQueryHookResult = ReturnType<typeof useDemocracyProposalCountQuery>;
export type DemocracyProposalCountLazyQueryHookResult = ReturnType<typeof useDemocracyProposalCountLazyQuery>;
export type DemocracyProposalCountQueryResult = ApolloReactCommon.QueryResult<DemocracyProposalCountQuery, DemocracyProposalCountQueryVariables>;
export const LatestReferendaPostsDocument = gql`
    query LatestReferendaPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
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
      onchain_referendum(
        where: {NOT: {referendumStatus_some: {OR: [{status: "Passed"}, {status: "Executed"}, {status: "NotPassed"}, {status: "Cancelled"}, {status: "Vetoed"}]}}}
      ) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestReferendaPostsQuery__
 *
 * To run a query within a React component, call `useLatestReferendaPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestReferendaPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestReferendaPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestReferendaPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>(LatestReferendaPostsDocument, baseOptions);
      }
export function useLatestReferendaPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>(LatestReferendaPostsDocument, baseOptions);
        }
export type LatestReferendaPostsQueryHookResult = ReturnType<typeof useLatestReferendaPostsQuery>;
export type LatestReferendaPostsLazyQueryHookResult = ReturnType<typeof useLatestReferendaPostsLazyQuery>;
export type LatestReferendaPostsQueryResult = ApolloReactCommon.QueryResult<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>;
export const ReferundumCountDocument = gql`
    query ReferundumCount($postType: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useReferundumCountQuery__
 *
 * To run a query within a React component, call `useReferundumCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferundumCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferundumCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *   },
 * });
 */
export function useReferundumCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReferundumCountQuery, ReferundumCountQueryVariables>) {
        return ApolloReactHooks.useQuery<ReferundumCountQuery, ReferundumCountQueryVariables>(ReferundumCountDocument, baseOptions);
      }
export function useReferundumCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReferundumCountQuery, ReferundumCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReferundumCountQuery, ReferundumCountQueryVariables>(ReferundumCountDocument, baseOptions);
        }
export type ReferundumCountQueryHookResult = ReturnType<typeof useReferundumCountQuery>;
export type ReferundumCountLazyQueryHookResult = ReturnType<typeof useReferundumCountLazyQuery>;
export type ReferundumCountQueryResult = ApolloReactCommon.QueryResult<ReferundumCountQuery, ReferundumCountQueryVariables>;
export const LatestTechCommitteeProposalPostsDocument = gql`
    query LatestTechCommitteeProposalPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_tech_committee_proposal_id: desc}}
  ) {
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
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(
        where: {NOT: {status_some: {OR: [{status: "Closed"}, {status: "Approved"}, {status: "Executed"}, {status: "Disapproved"}]}}}
      ) {
        id
        status(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestTechCommitteeProposalPostsQuery__
 *
 * To run a query within a React component, call `useLatestTechCommitteeProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestTechCommitteeProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestTechCommitteeProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestTechCommitteeProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestTechCommitteeProposalPostsQuery, LatestTechCommitteeProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestTechCommitteeProposalPostsQuery, LatestTechCommitteeProposalPostsQueryVariables>(LatestTechCommitteeProposalPostsDocument, baseOptions);
      }
export function useLatestTechCommitteeProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestTechCommitteeProposalPostsQuery, LatestTechCommitteeProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestTechCommitteeProposalPostsQuery, LatestTechCommitteeProposalPostsQueryVariables>(LatestTechCommitteeProposalPostsDocument, baseOptions);
        }
export type LatestTechCommitteeProposalPostsQueryHookResult = ReturnType<typeof useLatestTechCommitteeProposalPostsQuery>;
export type LatestTechCommitteeProposalPostsLazyQueryHookResult = ReturnType<typeof useLatestTechCommitteeProposalPostsLazyQuery>;
export type LatestTechCommitteeProposalPostsQueryResult = ApolloReactCommon.QueryResult<LatestTechCommitteeProposalPostsQuery, LatestTechCommitteeProposalPostsQueryVariables>;
export const TechCommitteeProposalCountDocument = gql`
    query TechCommitteeProposalCount($postType: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTechCommitteeProposalCountQuery__
 *
 * To run a query within a React component, call `useTechCommitteeProposalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechCommitteeProposalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechCommitteeProposalCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *   },
 * });
 */
export function useTechCommitteeProposalCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TechCommitteeProposalCountQuery, TechCommitteeProposalCountQueryVariables>) {
        return ApolloReactHooks.useQuery<TechCommitteeProposalCountQuery, TechCommitteeProposalCountQueryVariables>(TechCommitteeProposalCountDocument, baseOptions);
      }
export function useTechCommitteeProposalCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TechCommitteeProposalCountQuery, TechCommitteeProposalCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TechCommitteeProposalCountQuery, TechCommitteeProposalCountQueryVariables>(TechCommitteeProposalCountDocument, baseOptions);
        }
export type TechCommitteeProposalCountQueryHookResult = ReturnType<typeof useTechCommitteeProposalCountQuery>;
export type TechCommitteeProposalCountLazyQueryHookResult = ReturnType<typeof useTechCommitteeProposalCountLazyQuery>;
export type TechCommitteeProposalCountQueryResult = ApolloReactCommon.QueryResult<TechCommitteeProposalCountQuery, TechCommitteeProposalCountQueryVariables>;
export const LatestTipPostsDocument = gql`
    query LatestTipPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_tip_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
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
      onchain_tip_id
      onchain_tip(
        where: {NOT: {tipStatus_some: {OR: [{status: "TipClosed"}, {status: "TipClosing"}, {status: "TipRetracted"}]}}}
      ) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestTipPostsQuery__
 *
 * To run a query within a React component, call `useLatestTipPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestTipPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestTipPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestTipPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestTipPostsQuery, LatestTipPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestTipPostsQuery, LatestTipPostsQueryVariables>(LatestTipPostsDocument, baseOptions);
      }
export function useLatestTipPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestTipPostsQuery, LatestTipPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestTipPostsQuery, LatestTipPostsQueryVariables>(LatestTipPostsDocument, baseOptions);
        }
export type LatestTipPostsQueryHookResult = ReturnType<typeof useLatestTipPostsQuery>;
export type LatestTipPostsLazyQueryHookResult = ReturnType<typeof useLatestTipPostsLazyQuery>;
export type LatestTipPostsQueryResult = ApolloReactCommon.QueryResult<LatestTipPostsQuery, LatestTipPostsQueryVariables>;
export const TipProposalCountDocument = gql`
    query TipProposalCount($postType: Int!, $postTopic: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_tip_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTipProposalCountQuery__
 *
 * To run a query within a React component, call `useTipProposalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTipProposalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTipProposalCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *   },
 * });
 */
export function useTipProposalCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TipProposalCountQuery, TipProposalCountQueryVariables>) {
        return ApolloReactHooks.useQuery<TipProposalCountQuery, TipProposalCountQueryVariables>(TipProposalCountDocument, baseOptions);
      }
export function useTipProposalCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TipProposalCountQuery, TipProposalCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TipProposalCountQuery, TipProposalCountQueryVariables>(TipProposalCountDocument, baseOptions);
        }
export type TipProposalCountQueryHookResult = ReturnType<typeof useTipProposalCountQuery>;
export type TipProposalCountLazyQueryHookResult = ReturnType<typeof useTipProposalCountLazyQuery>;
export type TipProposalCountQueryResult = ApolloReactCommon.QueryResult<TipProposalCountQuery, TipProposalCountQueryVariables>;
export const LatestDemocracyTreasuryProposalPostsDocument = gql`
    query LatestDemocracyTreasuryProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
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
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestDemocracyTreasuryProposalPostsQuery__
 *
 * To run a query within a React component, call `useLatestDemocracyTreasuryProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestDemocracyTreasuryProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestDemocracyTreasuryProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestDemocracyTreasuryProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>(LatestDemocracyTreasuryProposalPostsDocument, baseOptions);
      }
export function useLatestDemocracyTreasuryProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>(LatestDemocracyTreasuryProposalPostsDocument, baseOptions);
        }
export type LatestDemocracyTreasuryProposalPostsQueryHookResult = ReturnType<typeof useLatestDemocracyTreasuryProposalPostsQuery>;
export type LatestDemocracyTreasuryProposalPostsLazyQueryHookResult = ReturnType<typeof useLatestDemocracyTreasuryProposalPostsLazyQuery>;
export type LatestDemocracyTreasuryProposalPostsQueryResult = ApolloReactCommon.QueryResult<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>;
export const DemocracyTreasuryProposalCountDocument = gql`
    query DemocracyTreasuryProposalCount($postType: Int!, $postTopic: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useDemocracyTreasuryProposalCountQuery__
 *
 * To run a query within a React component, call `useDemocracyTreasuryProposalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDemocracyTreasuryProposalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemocracyTreasuryProposalCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *   },
 * });
 */
export function useDemocracyTreasuryProposalCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DemocracyTreasuryProposalCountQuery, DemocracyTreasuryProposalCountQueryVariables>) {
        return ApolloReactHooks.useQuery<DemocracyTreasuryProposalCountQuery, DemocracyTreasuryProposalCountQueryVariables>(DemocracyTreasuryProposalCountDocument, baseOptions);
      }
export function useDemocracyTreasuryProposalCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DemocracyTreasuryProposalCountQuery, DemocracyTreasuryProposalCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DemocracyTreasuryProposalCountQuery, DemocracyTreasuryProposalCountQueryVariables>(DemocracyTreasuryProposalCountDocument, baseOptions);
        }
export type DemocracyTreasuryProposalCountQueryHookResult = ReturnType<typeof useDemocracyTreasuryProposalCountQuery>;
export type DemocracyTreasuryProposalCountLazyQueryHookResult = ReturnType<typeof useDemocracyTreasuryProposalCountLazyQuery>;
export type DemocracyTreasuryProposalCountQueryResult = ApolloReactCommon.QueryResult<DemocracyTreasuryProposalCountQuery, DemocracyTreasuryProposalCountQueryVariables>;
export const LatestPostsDocument = gql`
    query LatestPosts($limit: Int! = 10) {
  posts(limit: $limit, order_by: {id: desc}) {
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
      onchain_proposal_id
      onchain_proposal(
        where: {NOT: {proposalStatus_some: {OR: [{status: "Tabled"}, {status: "Cleared"}]}}}
      ) {
        id
        proposalStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      onchain_bounty_id
      onchain_bounty(
        where: {NOT: {bountyStatus_some: {OR: [{status: "BountyCanceled"}, {status: "BountyRejected"}, {status: "BountyAwarded"}, {status: "BountyClaimed"}]}}}
      ) {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      onchain_motion_id
      onchain_motion(
        where: {NOT: {motionStatus_some: {OR: [{status: "Executed"}, {status: "Disapproved"}]}}}
      ) {
        id
        motionStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      onchain_referendum_id
      onchain_referendum(
        where: {NOT: {referendumStatus_some: {OR: [{status: "Passed"}, {status: "Executed"}, {status: "NotPassed"}, {status: "Cancelled"}, {status: "Vetoed"}]}}}
      ) {
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
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(
        where: {NOT: {status_some: {OR: [{status: "Closed"}, {status: "Approved"}, {status: "Executed"}, {status: "Disapproved"}]}}}
      ) {
        id
        status(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      onchain_tip_id
      onchain_tip(
        where: {NOT: {tipStatus_some: {OR: [{status: "TipClosed"}, {status: "TipClosing"}, {status: "TipRetracted"}]}}}
      ) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useLatestPostsQuery__
 *
 * To run a query within a React component, call `useLatestPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestPostsQuery, LatestPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestPostsQuery, LatestPostsQueryVariables>(LatestPostsDocument, baseOptions);
      }
export function useLatestPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestPostsQuery, LatestPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestPostsQuery, LatestPostsQueryVariables>(LatestPostsDocument, baseOptions);
        }
export type LatestPostsQueryHookResult = ReturnType<typeof useLatestPostsQuery>;
export type LatestPostsLazyQueryHookResult = ReturnType<typeof useLatestPostsLazyQuery>;
export type LatestPostsQueryResult = ApolloReactCommon.QueryResult<LatestPostsQuery, LatestPostsQueryVariables>;
export const PostsCountDocument = gql`
    query PostsCount {
  posts_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __usePostsCountQuery__
 *
 * To run a query within a React component, call `usePostsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsCountQuery, PostsCountQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsCountQuery, PostsCountQueryVariables>(PostsCountDocument, baseOptions);
      }
export function usePostsCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsCountQuery, PostsCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsCountQuery, PostsCountQueryVariables>(PostsCountDocument, baseOptions);
        }
export type PostsCountQueryHookResult = ReturnType<typeof usePostsCountQuery>;
export type PostsCountLazyQueryHookResult = ReturnType<typeof usePostsCountLazyQuery>;
export type PostsCountQueryResult = ApolloReactCommon.QueryResult<PostsCountQuery, PostsCountQueryVariables>;
export const NetworkSocialsDocument = gql`
    query NetworkSocials($network: String!) {
  blockchain_socials(where: {network: {_ilike: $network}}) {
    block_explorer
    discord
    github
    homepage
    id
    network
    reddit
    telegram
    twitter
    youtube
  }
}
    `;

/**
 * __useNetworkSocialsQuery__
 *
 * To run a query within a React component, call `useNetworkSocialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNetworkSocialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNetworkSocialsQuery({
 *   variables: {
 *      network: // value for 'network'
 *   },
 * });
 */
export function useNetworkSocialsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NetworkSocialsQuery, NetworkSocialsQueryVariables>) {
        return ApolloReactHooks.useQuery<NetworkSocialsQuery, NetworkSocialsQueryVariables>(NetworkSocialsDocument, baseOptions);
      }
export function useNetworkSocialsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NetworkSocialsQuery, NetworkSocialsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NetworkSocialsQuery, NetworkSocialsQueryVariables>(NetworkSocialsDocument, baseOptions);
        }
export type NetworkSocialsQueryHookResult = ReturnType<typeof useNetworkSocialsQuery>;
export type NetworkSocialsLazyQueryHookResult = ReturnType<typeof useNetworkSocialsLazyQuery>;
export type NetworkSocialsQueryResult = ApolloReactCommon.QueryResult<NetworkSocialsQuery, NetworkSocialsQueryVariables>;
export const AboutDocument = gql`
    query ABOUT($network: String!, $address: String!) {
  about(network: $network, address: $address) {
    network
    address
    title
    description
    image
  }
}
    `;

/**
 * __useAboutQuery__
 *
 * To run a query within a React component, call `useAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutQuery({
 *   variables: {
 *      network: // value for 'network'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAboutQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AboutQuery, AboutQueryVariables>) {
        return ApolloReactHooks.useQuery<AboutQuery, AboutQueryVariables>(AboutDocument, baseOptions);
      }
export function useAboutLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AboutQuery, AboutQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AboutQuery, AboutQueryVariables>(AboutDocument, baseOptions);
        }
export type AboutQueryHookResult = ReturnType<typeof useAboutQuery>;
export type AboutLazyQueryHookResult = ReturnType<typeof useAboutLazyQuery>;
export type AboutQueryResult = ApolloReactCommon.QueryResult<AboutQuery, AboutQueryVariables>;
export const ChangeAboutDocument = gql`
    mutation changeAbout($network: String!, $address: String!, $title: String!, $description: String!, $image: String!, $signature: String!) {
  changeAbout(
    network: $network
    address: $address
    title: $title
    description: $description
    image: $image
    signature: $signature
  ) {
    message
  }
}
    `;
export type ChangeAboutMutationFn = ApolloReactCommon.MutationFunction<ChangeAboutMutation, ChangeAboutMutationVariables>;

/**
 * __useChangeAboutMutation__
 *
 * To run a mutation, you first call `useChangeAboutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeAboutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeAboutMutation, { data, loading, error }] = useChangeAboutMutation({
 *   variables: {
 *      network: // value for 'network'
 *      address: // value for 'address'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      image: // value for 'image'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useChangeAboutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeAboutMutation, ChangeAboutMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeAboutMutation, ChangeAboutMutationVariables>(ChangeAboutDocument, baseOptions);
      }
export type ChangeAboutMutationHookResult = ReturnType<typeof useChangeAboutMutation>;
export type ChangeAboutMutationResult = ApolloReactCommon.MutationResult<ChangeAboutMutation>;
export type ChangeAboutMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeAboutMutation, ChangeAboutMutationVariables>;
export const ProposalPostAndCommentsDocument = gql`
    query ProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_proposal_id: {_eq: $id}}}) {
    ...proposalPost
  }
}
    ${ProposalPostFragmentDoc}`;

/**
 * __useProposalPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useProposalPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProposalPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>(ProposalPostAndCommentsDocument, baseOptions);
      }
export function useProposalPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>(ProposalPostAndCommentsDocument, baseOptions);
        }
export type ProposalPostAndCommentsQueryHookResult = ReturnType<typeof useProposalPostAndCommentsQuery>;
export type ProposalPostAndCommentsLazyQueryHookResult = ReturnType<typeof useProposalPostAndCommentsLazyQuery>;
export type ProposalPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>;
export const AllDemocracyProposalPostsDocument = gql`
    query AllDemocracyProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
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
      onchain_proposal_id
      onchain_proposal(where: {}) {
        id
        proposalStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllDemocracyProposalPostsQuery__
 *
 * To run a query within a React component, call `useAllDemocracyProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDemocracyProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDemocracyProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllDemocracyProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllDemocracyProposalPostsQuery, AllDemocracyProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllDemocracyProposalPostsQuery, AllDemocracyProposalPostsQueryVariables>(AllDemocracyProposalPostsDocument, baseOptions);
      }
export function useAllDemocracyProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllDemocracyProposalPostsQuery, AllDemocracyProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllDemocracyProposalPostsQuery, AllDemocracyProposalPostsQueryVariables>(AllDemocracyProposalPostsDocument, baseOptions);
        }
export type AllDemocracyProposalPostsQueryHookResult = ReturnType<typeof useAllDemocracyProposalPostsQuery>;
export type AllDemocracyProposalPostsLazyQueryHookResult = ReturnType<typeof useAllDemocracyProposalPostsLazyQuery>;
export type AllDemocracyProposalPostsQueryResult = ApolloReactCommon.QueryResult<AllDemocracyProposalPostsQuery, AllDemocracyProposalPostsQueryVariables>;
export const AllReferendaPostsDocument = gql`
    query AllReferendaPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
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
      onchain_referendum(where: {}) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllReferendaPostsQuery__
 *
 * To run a query within a React component, call `useAllReferendaPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllReferendaPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllReferendaPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllReferendaPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllReferendaPostsQuery, AllReferendaPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllReferendaPostsQuery, AllReferendaPostsQueryVariables>(AllReferendaPostsDocument, baseOptions);
      }
export function useAllReferendaPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllReferendaPostsQuery, AllReferendaPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllReferendaPostsQuery, AllReferendaPostsQueryVariables>(AllReferendaPostsDocument, baseOptions);
        }
export type AllReferendaPostsQueryHookResult = ReturnType<typeof useAllReferendaPostsQuery>;
export type AllReferendaPostsLazyQueryHookResult = ReturnType<typeof useAllReferendaPostsLazyQuery>;
export type AllReferendaPostsQueryResult = ApolloReactCommon.QueryResult<AllReferendaPostsQuery, AllReferendaPostsQueryVariables>;
export const ReferendumPostAndCommentsDocument = gql`
    query ReferendumPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_referendum_id: {_eq: $id}}}) {
    ...referendumPost
  }
}
    ${ReferendumPostFragmentDoc}`;

/**
 * __useReferendumPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useReferendumPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferendumPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferendumPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReferendumPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>(ReferendumPostAndCommentsDocument, baseOptions);
      }
export function useReferendumPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>(ReferendumPostAndCommentsDocument, baseOptions);
        }
export type ReferendumPostAndCommentsQueryHookResult = ReturnType<typeof useReferendumPostAndCommentsQuery>;
export type ReferendumPostAndCommentsLazyQueryHookResult = ReturnType<typeof useReferendumPostAndCommentsLazyQuery>;
export type ReferendumPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>;
export const RequestResetPasswordDocument = gql`
    mutation requestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    message
  }
}
    `;
export type RequestResetPasswordMutationFn = ApolloReactCommon.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, baseOptions);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = ApolloReactCommon.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($newPassword: String!, $userId: Int!, $token: String!) {
  resetPassword(newPassword: $newPassword, userId: $userId, token: $token) {
    message
  }
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SearchPostsDocument = gql`
    query SearchPosts($term: String!) {
  posts(
    order_by: {id: desc}
    limit: 20
    where: {_or: [{title: {_ilike: $term}}, {content: {_ilike: $term}}]}
  ) {
    ...searchPostFields
  }
}
    ${SearchPostFieldsFragmentDoc}`;

/**
 * __useSearchPostsQuery__
 *
 * To run a query within a React component, call `useSearchPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPostsQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearchPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchPostsQuery, SearchPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchPostsQuery, SearchPostsQueryVariables>(SearchPostsDocument, baseOptions);
      }
export function useSearchPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchPostsQuery, SearchPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchPostsQuery, SearchPostsQueryVariables>(SearchPostsDocument, baseOptions);
        }
export type SearchPostsQueryHookResult = ReturnType<typeof useSearchPostsQuery>;
export type SearchPostsLazyQueryHookResult = ReturnType<typeof useSearchPostsLazyQuery>;
export type SearchPostsQueryResult = ApolloReactCommon.QueryResult<SearchPostsQuery, SearchPostsQueryVariables>;
export const ChangeUsernameDocument = gql`
    mutation changeUsername($username: String!, $password: String!) {
  changeUsername(username: $username, password: $password) {
    message
    token
  }
}
    `;
export type ChangeUsernameMutationFn = ApolloReactCommon.MutationFunction<ChangeUsernameMutation, ChangeUsernameMutationVariables>;

/**
 * __useChangeUsernameMutation__
 *
 * To run a mutation, you first call `useChangeUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUsernameMutation, { data, loading, error }] = useChangeUsernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangeUsernameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeUsernameMutation, ChangeUsernameMutationVariables>(ChangeUsernameDocument, baseOptions);
      }
export type ChangeUsernameMutationHookResult = ReturnType<typeof useChangeUsernameMutation>;
export type ChangeUsernameMutationResult = ApolloReactCommon.MutationResult<ChangeUsernameMutation>;
export type ChangeUsernameMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation changeEmail($email: String!, $password: String!) {
  changeEmail(email: $email, password: $password) {
    message
    token
  }
}
    `;
export type ChangeEmailMutationFn = ApolloReactCommon.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, baseOptions);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = ApolloReactCommon.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    message
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const AddressLinkStartDocument = gql`
    mutation addressLinkStart($network: String!, $address: String!) {
  addressLinkStart(network: $network, address: $address) {
    sign_message
    message
    address_id
  }
}
    `;
export type AddressLinkStartMutationFn = ApolloReactCommon.MutationFunction<AddressLinkStartMutation, AddressLinkStartMutationVariables>;

/**
 * __useAddressLinkStartMutation__
 *
 * To run a mutation, you first call `useAddressLinkStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLinkStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLinkStartMutation, { data, loading, error }] = useAddressLinkStartMutation({
 *   variables: {
 *      network: // value for 'network'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressLinkStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLinkStartMutation, AddressLinkStartMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLinkStartMutation, AddressLinkStartMutationVariables>(AddressLinkStartDocument, baseOptions);
      }
export type AddressLinkStartMutationHookResult = ReturnType<typeof useAddressLinkStartMutation>;
export type AddressLinkStartMutationResult = ApolloReactCommon.MutationResult<AddressLinkStartMutation>;
export type AddressLinkStartMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLinkStartMutation, AddressLinkStartMutationVariables>;
export const AddressLinkConfirmDocument = gql`
    mutation addressLinkConfirm($address_id: Int!, $signature: String!) {
  addressLinkConfirm(address_id: $address_id, signature: $signature) {
    message
    token
  }
}
    `;
export type AddressLinkConfirmMutationFn = ApolloReactCommon.MutationFunction<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>;

/**
 * __useAddressLinkConfirmMutation__
 *
 * To run a mutation, you first call `useAddressLinkConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLinkConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLinkConfirmMutation, { data, loading, error }] = useAddressLinkConfirmMutation({
 *   variables: {
 *      address_id: // value for 'address_id'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useAddressLinkConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>(AddressLinkConfirmDocument, baseOptions);
      }
export type AddressLinkConfirmMutationHookResult = ReturnType<typeof useAddressLinkConfirmMutation>;
export type AddressLinkConfirmMutationResult = ApolloReactCommon.MutationResult<AddressLinkConfirmMutation>;
export type AddressLinkConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>;
export const AddressUnlinkDocument = gql`
    mutation addressUnlink($address: String!) {
  addressUnlink(address: $address) {
    message
    token
  }
}
    `;
export type AddressUnlinkMutationFn = ApolloReactCommon.MutationFunction<AddressUnlinkMutation, AddressUnlinkMutationVariables>;

/**
 * __useAddressUnlinkMutation__
 *
 * To run a mutation, you first call `useAddressUnlinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressUnlinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressUnlinkMutation, { data, loading, error }] = useAddressUnlinkMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressUnlinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressUnlinkMutation, AddressUnlinkMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressUnlinkMutation, AddressUnlinkMutationVariables>(AddressUnlinkDocument, baseOptions);
      }
export type AddressUnlinkMutationHookResult = ReturnType<typeof useAddressUnlinkMutation>;
export type AddressUnlinkMutationResult = ApolloReactCommon.MutationResult<AddressUnlinkMutation>;
export type AddressUnlinkMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressUnlinkMutation, AddressUnlinkMutationVariables>;
export const ResendVerifyEmailTokenDocument = gql`
    mutation resendVerifyEmailToken {
  resendVerifyEmailToken {
    message
  }
}
    `;
export type ResendVerifyEmailTokenMutationFn = ApolloReactCommon.MutationFunction<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>;

/**
 * __useResendVerifyEmailTokenMutation__
 *
 * To run a mutation, you first call `useResendVerifyEmailTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerifyEmailTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerifyEmailTokenMutation, { data, loading, error }] = useResendVerifyEmailTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useResendVerifyEmailTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>(ResendVerifyEmailTokenDocument, baseOptions);
      }
export type ResendVerifyEmailTokenMutationHookResult = ReturnType<typeof useResendVerifyEmailTokenMutation>;
export type ResendVerifyEmailTokenMutationResult = ApolloReactCommon.MutationResult<ResendVerifyEmailTokenMutation>;
export type ResendVerifyEmailTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>;
export const SetDefaultAddressDocument = gql`
    mutation setDefaultAddress($address: String!) {
  setDefaultAddress(address: $address) {
    message
    token
  }
}
    `;
export type SetDefaultAddressMutationFn = ApolloReactCommon.MutationFunction<SetDefaultAddressMutation, SetDefaultAddressMutationVariables>;

/**
 * __useSetDefaultAddressMutation__
 *
 * To run a mutation, you first call `useSetDefaultAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetDefaultAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setDefaultAddressMutation, { data, loading, error }] = useSetDefaultAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSetDefaultAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetDefaultAddressMutation, SetDefaultAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<SetDefaultAddressMutation, SetDefaultAddressMutationVariables>(SetDefaultAddressDocument, baseOptions);
      }
export type SetDefaultAddressMutationHookResult = ReturnType<typeof useSetDefaultAddressMutation>;
export type SetDefaultAddressMutationResult = ApolloReactCommon.MutationResult<SetDefaultAddressMutation>;
export type SetDefaultAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<SetDefaultAddressMutation, SetDefaultAddressMutationVariables>;
export const SetCredentialsStartDocument = gql`
    mutation setCredentialsStart($address: String!) {
  setCredentialsStart(address: $address) {
    message
    signMessage
  }
}
    `;
export type SetCredentialsStartMutationFn = ApolloReactCommon.MutationFunction<SetCredentialsStartMutation, SetCredentialsStartMutationVariables>;

/**
 * __useSetCredentialsStartMutation__
 *
 * To run a mutation, you first call `useSetCredentialsStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCredentialsStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCredentialsStartMutation, { data, loading, error }] = useSetCredentialsStartMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSetCredentialsStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetCredentialsStartMutation, SetCredentialsStartMutationVariables>) {
        return ApolloReactHooks.useMutation<SetCredentialsStartMutation, SetCredentialsStartMutationVariables>(SetCredentialsStartDocument, baseOptions);
      }
export type SetCredentialsStartMutationHookResult = ReturnType<typeof useSetCredentialsStartMutation>;
export type SetCredentialsStartMutationResult = ApolloReactCommon.MutationResult<SetCredentialsStartMutation>;
export type SetCredentialsStartMutationOptions = ApolloReactCommon.BaseMutationOptions<SetCredentialsStartMutation, SetCredentialsStartMutationVariables>;
export const SetCredentialsConfirmDocument = gql`
    mutation setCredentialsConfirm($address: String!, $email: String, $signature: String!, $username: String!, $password: String!) {
  setCredentialsConfirm(
    address: $address
    email: $email
    signature: $signature
    username: $username
    password: $password
  ) {
    message
    token
  }
}
    `;
export type SetCredentialsConfirmMutationFn = ApolloReactCommon.MutationFunction<SetCredentialsConfirmMutation, SetCredentialsConfirmMutationVariables>;

/**
 * __useSetCredentialsConfirmMutation__
 *
 * To run a mutation, you first call `useSetCredentialsConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCredentialsConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCredentialsConfirmMutation, { data, loading, error }] = useSetCredentialsConfirmMutation({
 *   variables: {
 *      address: // value for 'address'
 *      email: // value for 'email'
 *      signature: // value for 'signature'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSetCredentialsConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetCredentialsConfirmMutation, SetCredentialsConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<SetCredentialsConfirmMutation, SetCredentialsConfirmMutationVariables>(SetCredentialsConfirmDocument, baseOptions);
      }
export type SetCredentialsConfirmMutationHookResult = ReturnType<typeof useSetCredentialsConfirmMutation>;
export type SetCredentialsConfirmMutationResult = ApolloReactCommon.MutationResult<SetCredentialsConfirmMutation>;
export type SetCredentialsConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<SetCredentialsConfirmMutation, SetCredentialsConfirmMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation deleteAccount($password: String!) {
  deleteAccount(password: $password) {
    message
  }
}
    `;
export type DeleteAccountMutationFn = ApolloReactCommon.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, baseOptions);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = ApolloReactCommon.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const MultisigLinkStartDocument = gql`
    mutation multisigLinkStart($address: String!) {
  multisigLinkStart(address: $address) {
    message
    signMessage
  }
}
    `;
export type MultisigLinkStartMutationFn = ApolloReactCommon.MutationFunction<MultisigLinkStartMutation, MultisigLinkStartMutationVariables>;

/**
 * __useMultisigLinkStartMutation__
 *
 * To run a mutation, you first call `useMultisigLinkStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMultisigLinkStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [multisigLinkStartMutation, { data, loading, error }] = useMultisigLinkStartMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useMultisigLinkStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MultisigLinkStartMutation, MultisigLinkStartMutationVariables>) {
        return ApolloReactHooks.useMutation<MultisigLinkStartMutation, MultisigLinkStartMutationVariables>(MultisigLinkStartDocument, baseOptions);
      }
export type MultisigLinkStartMutationHookResult = ReturnType<typeof useMultisigLinkStartMutation>;
export type MultisigLinkStartMutationResult = ApolloReactCommon.MutationResult<MultisigLinkStartMutation>;
export type MultisigLinkStartMutationOptions = ApolloReactCommon.BaseMutationOptions<MultisigLinkStartMutation, MultisigLinkStartMutationVariables>;
export const MultisigLinkConfirmDocument = gql`
    mutation multisigLinkConfirm($network: String!, $address: String!, $addresses: String!, $ss58Prefix: Int!, $threshold: Int!, $signatory: String!, $signature: String!) {
  multisigLinkConfirm(
    network: $network
    address: $address
    addresses: $addresses
    ss58Prefix: $ss58Prefix
    threshold: $threshold
    signatory: $signatory
    signature: $signature
  ) {
    message
    token
  }
}
    `;
export type MultisigLinkConfirmMutationFn = ApolloReactCommon.MutationFunction<MultisigLinkConfirmMutation, MultisigLinkConfirmMutationVariables>;

/**
 * __useMultisigLinkConfirmMutation__
 *
 * To run a mutation, you first call `useMultisigLinkConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMultisigLinkConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [multisigLinkConfirmMutation, { data, loading, error }] = useMultisigLinkConfirmMutation({
 *   variables: {
 *      network: // value for 'network'
 *      address: // value for 'address'
 *      addresses: // value for 'addresses'
 *      ss58Prefix: // value for 'ss58Prefix'
 *      threshold: // value for 'threshold'
 *      signatory: // value for 'signatory'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useMultisigLinkConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MultisigLinkConfirmMutation, MultisigLinkConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<MultisigLinkConfirmMutation, MultisigLinkConfirmMutationVariables>(MultisigLinkConfirmDocument, baseOptions);
      }
export type MultisigLinkConfirmMutationHookResult = ReturnType<typeof useMultisigLinkConfirmMutation>;
export type MultisigLinkConfirmMutationResult = ApolloReactCommon.MutationResult<MultisigLinkConfirmMutation>;
export type MultisigLinkConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<MultisigLinkConfirmMutation, MultisigLinkConfirmMutationVariables>;
export const TechCommitteeProposalPostAndCommentsDocument = gql`
    query TechCommitteeProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_tech_committee_proposal_id: {_eq: $id}}}) {
    ...techCommitteeProposalPost
  }
}
    ${TechCommitteeProposalPostFragmentDoc}`;

/**
 * __useTechCommitteeProposalPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useTechCommitteeProposalPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechCommitteeProposalPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechCommitteeProposalPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTechCommitteeProposalPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TechCommitteeProposalPostAndCommentsQuery, TechCommitteeProposalPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<TechCommitteeProposalPostAndCommentsQuery, TechCommitteeProposalPostAndCommentsQueryVariables>(TechCommitteeProposalPostAndCommentsDocument, baseOptions);
      }
export function useTechCommitteeProposalPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TechCommitteeProposalPostAndCommentsQuery, TechCommitteeProposalPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TechCommitteeProposalPostAndCommentsQuery, TechCommitteeProposalPostAndCommentsQueryVariables>(TechCommitteeProposalPostAndCommentsDocument, baseOptions);
        }
export type TechCommitteeProposalPostAndCommentsQueryHookResult = ReturnType<typeof useTechCommitteeProposalPostAndCommentsQuery>;
export type TechCommitteeProposalPostAndCommentsLazyQueryHookResult = ReturnType<typeof useTechCommitteeProposalPostAndCommentsLazyQuery>;
export type TechCommitteeProposalPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<TechCommitteeProposalPostAndCommentsQuery, TechCommitteeProposalPostAndCommentsQueryVariables>;
export const AllTechCommitteeProposalPostsDocument = gql`
    query AllTechCommitteeProposalPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_tech_committee_proposal_id: desc}}
  ) {
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
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(where: {}) {
        id
        method
        status(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllTechCommitteeProposalPostsQuery__
 *
 * To run a query within a React component, call `useAllTechCommitteeProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTechCommitteeProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTechCommitteeProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllTechCommitteeProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTechCommitteeProposalPostsQuery, AllTechCommitteeProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTechCommitteeProposalPostsQuery, AllTechCommitteeProposalPostsQueryVariables>(AllTechCommitteeProposalPostsDocument, baseOptions);
      }
export function useAllTechCommitteeProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTechCommitteeProposalPostsQuery, AllTechCommitteeProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTechCommitteeProposalPostsQuery, AllTechCommitteeProposalPostsQueryVariables>(AllTechCommitteeProposalPostsDocument, baseOptions);
        }
export type AllTechCommitteeProposalPostsQueryHookResult = ReturnType<typeof useAllTechCommitteeProposalPostsQuery>;
export type AllTechCommitteeProposalPostsLazyQueryHookResult = ReturnType<typeof useAllTechCommitteeProposalPostsLazyQuery>;
export type AllTechCommitteeProposalPostsQueryResult = ApolloReactCommon.QueryResult<AllTechCommitteeProposalPostsQuery, AllTechCommitteeProposalPostsQueryVariables>;
export const TipPostAndCommentsDocument = gql`
    query TipPostAndComments($hash: String!) {
  posts(where: {onchain_link: {onchain_tip_id: {_eq: $hash}}}) {
    ...tipPost
  }
}
    ${TipPostFragmentDoc}`;

/**
 * __useTipPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useTipPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTipPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTipPostAndCommentsQuery({
 *   variables: {
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useTipPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TipPostAndCommentsQuery, TipPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<TipPostAndCommentsQuery, TipPostAndCommentsQueryVariables>(TipPostAndCommentsDocument, baseOptions);
      }
export function useTipPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TipPostAndCommentsQuery, TipPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TipPostAndCommentsQuery, TipPostAndCommentsQueryVariables>(TipPostAndCommentsDocument, baseOptions);
        }
export type TipPostAndCommentsQueryHookResult = ReturnType<typeof useTipPostAndCommentsQuery>;
export type TipPostAndCommentsLazyQueryHookResult = ReturnType<typeof useTipPostAndCommentsLazyQuery>;
export type TipPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<TipPostAndCommentsQuery, TipPostAndCommentsQueryVariables>;
export const AllTipPostsDocument = gql`
    query AllTipPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_tip_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
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
      onchain_tip_id
      onchain_tip(where: {}) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllTipPostsQuery__
 *
 * To run a query within a React component, call `useAllTipPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTipPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTipPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllTipPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTipPostsQuery, AllTipPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTipPostsQuery, AllTipPostsQueryVariables>(AllTipPostsDocument, baseOptions);
      }
export function useAllTipPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTipPostsQuery, AllTipPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTipPostsQuery, AllTipPostsQueryVariables>(AllTipPostsDocument, baseOptions);
        }
export type AllTipPostsQueryHookResult = ReturnType<typeof useAllTipPostsQuery>;
export type AllTipPostsLazyQueryHookResult = ReturnType<typeof useAllTipPostsLazyQuery>;
export type AllTipPostsQueryResult = ApolloReactCommon.QueryResult<AllTipPostsQuery, AllTipPostsQueryVariables>;
export const TrackerBountyPostsDocument = gql`
    query TrackerBountyPosts($postType: Int!, $onchainBountyIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_bounty_id: {_in: $onchainBountyIds}}}
    order_by: {onchain_link: {onchain_bounty_id: desc}}
  ) {
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
      onchain_bounty_id
      onchain_bounty(where: {}) {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerBountyPostsQuery__
 *
 * To run a query within a React component, call `useTrackerBountyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerBountyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerBountyPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainBountyIds: // value for 'onchainBountyIds'
 *   },
 * });
 */
export function useTrackerBountyPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerBountyPostsQuery, TrackerBountyPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerBountyPostsQuery, TrackerBountyPostsQueryVariables>(TrackerBountyPostsDocument, baseOptions);
      }
export function useTrackerBountyPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerBountyPostsQuery, TrackerBountyPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerBountyPostsQuery, TrackerBountyPostsQueryVariables>(TrackerBountyPostsDocument, baseOptions);
        }
export type TrackerBountyPostsQueryHookResult = ReturnType<typeof useTrackerBountyPostsQuery>;
export type TrackerBountyPostsLazyQueryHookResult = ReturnType<typeof useTrackerBountyPostsLazyQuery>;
export type TrackerBountyPostsQueryResult = ApolloReactCommon.QueryResult<TrackerBountyPostsQuery, TrackerBountyPostsQueryVariables>;
export const TrackerMotionPostsDocument = gql`
    query TrackerMotionPosts($postType: Int!, $onchainMotionIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_in: $onchainMotionIds}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
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
      onchain_motion_id
      onchain_motion(where: {}) {
        id
        motionStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerMotionPostsQuery__
 *
 * To run a query within a React component, call `useTrackerMotionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerMotionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerMotionPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainMotionIds: // value for 'onchainMotionIds'
 *   },
 * });
 */
export function useTrackerMotionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerMotionPostsQuery, TrackerMotionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerMotionPostsQuery, TrackerMotionPostsQueryVariables>(TrackerMotionPostsDocument, baseOptions);
      }
export function useTrackerMotionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerMotionPostsQuery, TrackerMotionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerMotionPostsQuery, TrackerMotionPostsQueryVariables>(TrackerMotionPostsDocument, baseOptions);
        }
export type TrackerMotionPostsQueryHookResult = ReturnType<typeof useTrackerMotionPostsQuery>;
export type TrackerMotionPostsLazyQueryHookResult = ReturnType<typeof useTrackerMotionPostsLazyQuery>;
export type TrackerMotionPostsQueryResult = ApolloReactCommon.QueryResult<TrackerMotionPostsQuery, TrackerMotionPostsQueryVariables>;
export const TrackerDemocracyProposalPostsDocument = gql`
    query TrackerDemocracyProposalPosts($postType: Int!, $onchainProposalIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_proposal_id: {_in: $onchainProposalIds}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
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
      onchain_proposal_id
      onchain_proposal(where: {}) {
        id
        proposalStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerDemocracyProposalPostsQuery__
 *
 * To run a query within a React component, call `useTrackerDemocracyProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerDemocracyProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerDemocracyProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainProposalIds: // value for 'onchainProposalIds'
 *   },
 * });
 */
export function useTrackerDemocracyProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerDemocracyProposalPostsQuery, TrackerDemocracyProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerDemocracyProposalPostsQuery, TrackerDemocracyProposalPostsQueryVariables>(TrackerDemocracyProposalPostsDocument, baseOptions);
      }
export function useTrackerDemocracyProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerDemocracyProposalPostsQuery, TrackerDemocracyProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerDemocracyProposalPostsQuery, TrackerDemocracyProposalPostsQueryVariables>(TrackerDemocracyProposalPostsDocument, baseOptions);
        }
export type TrackerDemocracyProposalPostsQueryHookResult = ReturnType<typeof useTrackerDemocracyProposalPostsQuery>;
export type TrackerDemocracyProposalPostsLazyQueryHookResult = ReturnType<typeof useTrackerDemocracyProposalPostsLazyQuery>;
export type TrackerDemocracyProposalPostsQueryResult = ApolloReactCommon.QueryResult<TrackerDemocracyProposalPostsQuery, TrackerDemocracyProposalPostsQueryVariables>;
export const TrackerReferendaPostsDocument = gql`
    query TrackerReferendaPosts($postType: Int!, $onchainReferendumIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_in: $onchainReferendumIds}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
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
      onchain_referendum(where: {}) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerReferendaPostsQuery__
 *
 * To run a query within a React component, call `useTrackerReferendaPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerReferendaPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerReferendaPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainReferendumIds: // value for 'onchainReferendumIds'
 *   },
 * });
 */
export function useTrackerReferendaPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerReferendaPostsQuery, TrackerReferendaPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerReferendaPostsQuery, TrackerReferendaPostsQueryVariables>(TrackerReferendaPostsDocument, baseOptions);
      }
export function useTrackerReferendaPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerReferendaPostsQuery, TrackerReferendaPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerReferendaPostsQuery, TrackerReferendaPostsQueryVariables>(TrackerReferendaPostsDocument, baseOptions);
        }
export type TrackerReferendaPostsQueryHookResult = ReturnType<typeof useTrackerReferendaPostsQuery>;
export type TrackerReferendaPostsLazyQueryHookResult = ReturnType<typeof useTrackerReferendaPostsLazyQuery>;
export type TrackerReferendaPostsQueryResult = ApolloReactCommon.QueryResult<TrackerReferendaPostsQuery, TrackerReferendaPostsQueryVariables>;
export const TrackerTechCommitteeProposalPostsDocument = gql`
    query TrackerTechCommitteeProposalPosts($postType: Int!, $onchainTechCommitteeProposalIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_in: $onchainTechCommitteeProposalIds}}}
    order_by: {onchain_link: {onchain_tech_committee_proposal_id: desc}}
  ) {
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
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(where: {}) {
        id
        status(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerTechCommitteeProposalPostsQuery__
 *
 * To run a query within a React component, call `useTrackerTechCommitteeProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerTechCommitteeProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerTechCommitteeProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainTechCommitteeProposalIds: // value for 'onchainTechCommitteeProposalIds'
 *   },
 * });
 */
export function useTrackerTechCommitteeProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerTechCommitteeProposalPostsQuery, TrackerTechCommitteeProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerTechCommitteeProposalPostsQuery, TrackerTechCommitteeProposalPostsQueryVariables>(TrackerTechCommitteeProposalPostsDocument, baseOptions);
      }
export function useTrackerTechCommitteeProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerTechCommitteeProposalPostsQuery, TrackerTechCommitteeProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerTechCommitteeProposalPostsQuery, TrackerTechCommitteeProposalPostsQueryVariables>(TrackerTechCommitteeProposalPostsDocument, baseOptions);
        }
export type TrackerTechCommitteeProposalPostsQueryHookResult = ReturnType<typeof useTrackerTechCommitteeProposalPostsQuery>;
export type TrackerTechCommitteeProposalPostsLazyQueryHookResult = ReturnType<typeof useTrackerTechCommitteeProposalPostsLazyQuery>;
export type TrackerTechCommitteeProposalPostsQueryResult = ApolloReactCommon.QueryResult<TrackerTechCommitteeProposalPostsQuery, TrackerTechCommitteeProposalPostsQueryVariables>;
export const TrackerTipPostsDocument = gql`
    query TrackerTipPosts($postType: Int!, $onchainTipIds: [String!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tip_id: {_in: $onchainTipIds}}}
    order_by: {onchain_link: {id: desc}}
  ) {
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
      onchain_tip_id
      onchain_tip(where: {}) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerTipPostsQuery__
 *
 * To run a query within a React component, call `useTrackerTipPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerTipPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerTipPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainTipIds: // value for 'onchainTipIds'
 *   },
 * });
 */
export function useTrackerTipPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerTipPostsQuery, TrackerTipPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerTipPostsQuery, TrackerTipPostsQueryVariables>(TrackerTipPostsDocument, baseOptions);
      }
export function useTrackerTipPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerTipPostsQuery, TrackerTipPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerTipPostsQuery, TrackerTipPostsQueryVariables>(TrackerTipPostsDocument, baseOptions);
        }
export type TrackerTipPostsQueryHookResult = ReturnType<typeof useTrackerTipPostsQuery>;
export type TrackerTipPostsLazyQueryHookResult = ReturnType<typeof useTrackerTipPostsLazyQuery>;
export type TrackerTipPostsQueryResult = ApolloReactCommon.QueryResult<TrackerTipPostsQuery, TrackerTipPostsQueryVariables>;
export const TrackerDemocracyTreasuryProposalPostsDocument = gql`
    query TrackerDemocracyTreasuryProposalPosts($postType: Int!, $onchainTreasuryProposalIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_treasury_proposal_id: {_in: $onchainTreasuryProposalIds}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
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
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useTrackerDemocracyTreasuryProposalPostsQuery__
 *
 * To run a query within a React component, call `useTrackerDemocracyTreasuryProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerDemocracyTreasuryProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerDemocracyTreasuryProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      onchainTreasuryProposalIds: // value for 'onchainTreasuryProposalIds'
 *   },
 * });
 */
export function useTrackerDemocracyTreasuryProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackerDemocracyTreasuryProposalPostsQuery, TrackerDemocracyTreasuryProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackerDemocracyTreasuryProposalPostsQuery, TrackerDemocracyTreasuryProposalPostsQueryVariables>(TrackerDemocracyTreasuryProposalPostsDocument, baseOptions);
      }
export function useTrackerDemocracyTreasuryProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackerDemocracyTreasuryProposalPostsQuery, TrackerDemocracyTreasuryProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackerDemocracyTreasuryProposalPostsQuery, TrackerDemocracyTreasuryProposalPostsQueryVariables>(TrackerDemocracyTreasuryProposalPostsDocument, baseOptions);
        }
export type TrackerDemocracyTreasuryProposalPostsQueryHookResult = ReturnType<typeof useTrackerDemocracyTreasuryProposalPostsQuery>;
export type TrackerDemocracyTreasuryProposalPostsLazyQueryHookResult = ReturnType<typeof useTrackerDemocracyTreasuryProposalPostsLazyQuery>;
export type TrackerDemocracyTreasuryProposalPostsQueryResult = ApolloReactCommon.QueryResult<TrackerDemocracyTreasuryProposalPostsQuery, TrackerDemocracyTreasuryProposalPostsQueryVariables>;
export const AllDemocracyTreasuryProposalPostsDocument = gql`
    query AllDemocracyTreasuryProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
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
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useAllDemocracyTreasuryProposalPostsQuery__
 *
 * To run a query within a React component, call `useAllDemocracyTreasuryProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDemocracyTreasuryProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDemocracyTreasuryProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllDemocracyTreasuryProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllDemocracyTreasuryProposalPostsQuery, AllDemocracyTreasuryProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllDemocracyTreasuryProposalPostsQuery, AllDemocracyTreasuryProposalPostsQueryVariables>(AllDemocracyTreasuryProposalPostsDocument, baseOptions);
      }
export function useAllDemocracyTreasuryProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllDemocracyTreasuryProposalPostsQuery, AllDemocracyTreasuryProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllDemocracyTreasuryProposalPostsQuery, AllDemocracyTreasuryProposalPostsQueryVariables>(AllDemocracyTreasuryProposalPostsDocument, baseOptions);
        }
export type AllDemocracyTreasuryProposalPostsQueryHookResult = ReturnType<typeof useAllDemocracyTreasuryProposalPostsQuery>;
export type AllDemocracyTreasuryProposalPostsLazyQueryHookResult = ReturnType<typeof useAllDemocracyTreasuryProposalPostsLazyQuery>;
export type AllDemocracyTreasuryProposalPostsQueryResult = ApolloReactCommon.QueryResult<AllDemocracyTreasuryProposalPostsQuery, AllDemocracyTreasuryProposalPostsQueryVariables>;
export const TreasuryProposalPostAndCommentsDocument = gql`
    query TreasuryProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_treasury_proposal_id: {_eq: $id}}}) {
    ...treasuryProposalPost
  }
}
    ${TreasuryProposalPostFragmentDoc}`;

/**
 * __useTreasuryProposalPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useTreasuryProposalPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTreasuryProposalPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTreasuryProposalPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTreasuryProposalPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>(TreasuryProposalPostAndCommentsDocument, baseOptions);
      }
export function useTreasuryProposalPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>(TreasuryProposalPostAndCommentsDocument, baseOptions);
        }
export type TreasuryProposalPostAndCommentsQueryHookResult = ReturnType<typeof useTreasuryProposalPostAndCommentsQuery>;
export type TreasuryProposalPostAndCommentsLazyQueryHookResult = ReturnType<typeof useTreasuryProposalPostAndCommentsLazyQuery>;
export type TreasuryProposalPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>;
export const UndoEmailChangeDocument = gql`
    mutation undoEmailChange($token: String!) {
  undoEmailChange(token: $token) {
    message
    token
    email
  }
}
    `;
export type UndoEmailChangeMutationFn = ApolloReactCommon.MutationFunction<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>;

/**
 * __useUndoEmailChangeMutation__
 *
 * To run a mutation, you first call `useUndoEmailChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoEmailChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoEmailChangeMutation, { data, loading, error }] = useUndoEmailChangeMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUndoEmailChangeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>) {
        return ApolloReactHooks.useMutation<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>(UndoEmailChangeDocument, baseOptions);
      }
export type UndoEmailChangeMutationHookResult = ReturnType<typeof useUndoEmailChangeMutation>;
export type UndoEmailChangeMutationResult = ApolloReactCommon.MutationResult<UndoEmailChangeMutation>;
export type UndoEmailChangeMutationOptions = ApolloReactCommon.BaseMutationOptions<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>;
export const ProfileDocument = gql`
    query PROFILE($username: String!) {
  profile(username: $username) {
    id
    username
    kusama_default_address
    polkadot_default_address
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = ApolloReactCommon.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const VerifyEmailDocument = gql`
    mutation verifyEmail($token: String!) {
  verifyEmail(token: $token) {
    message
    token
  }
}
    `;
export type VerifyEmailMutationFn = ApolloReactCommon.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = ApolloReactCommon.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const GetLatestMotionsCountDocument = gql`
    query GetLatestMotionsCount($postType: Int!) {
  posts_aggregate(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetLatestMotionsCountQuery__
 *
 * To run a query within a React component, call `useGetLatestMotionsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestMotionsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestMotionsCountQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *   },
 * });
 */
export function useGetLatestMotionsCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestMotionsCountQuery, GetLatestMotionsCountQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestMotionsCountQuery, GetLatestMotionsCountQueryVariables>(GetLatestMotionsCountDocument, baseOptions);
      }
export function useGetLatestMotionsCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestMotionsCountQuery, GetLatestMotionsCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestMotionsCountQuery, GetLatestMotionsCountQueryVariables>(GetLatestMotionsCountDocument, baseOptions);
        }
export type GetLatestMotionsCountQueryHookResult = ReturnType<typeof useGetLatestMotionsCountQuery>;
export type GetLatestMotionsCountLazyQueryHookResult = ReturnType<typeof useGetLatestMotionsCountLazyQuery>;
export type GetLatestMotionsCountQueryResult = ApolloReactCommon.QueryResult<GetLatestMotionsCountQuery, GetLatestMotionsCountQueryVariables>;
export const GetLatestPostsDocument = gql`
    query GetLatestPosts($limit: Int! = 10) {
  posts(limit: $limit, order_by: {id: desc}) {
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
      onchain_proposal_id
      onchain_proposal {
        id
        proposalStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      onchain_bounty_id
      onchain_bounty {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      onchain_motion_id
      onchain_motion {
        id
        motionStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
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
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal {
        id
        status(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      onchain_tip_id
      onchain_tip {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestPostsQuery, GetLatestPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestPostsQuery, GetLatestPostsQueryVariables>(GetLatestPostsDocument, baseOptions);
      }
export function useGetLatestPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestPostsQuery, GetLatestPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestPostsQuery, GetLatestPostsQueryVariables>(GetLatestPostsDocument, baseOptions);
        }
export type GetLatestPostsQueryHookResult = ReturnType<typeof useGetLatestPostsQuery>;
export type GetLatestPostsLazyQueryHookResult = ReturnType<typeof useGetLatestPostsLazyQuery>;
export type GetLatestPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestPostsQuery, GetLatestPostsQueryVariables>;
export const GetLatestBountyPostsDocument = gql`
    query GetLatestBountyPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_bounty_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_bounty_id: desc}}
  ) {
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
      onchain_bounty_id
      onchain_bounty {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestBountyPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestBountyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestBountyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestBountyPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestBountyPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestBountyPostsQuery, GetLatestBountyPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestBountyPostsQuery, GetLatestBountyPostsQueryVariables>(GetLatestBountyPostsDocument, baseOptions);
      }
export function useGetLatestBountyPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestBountyPostsQuery, GetLatestBountyPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestBountyPostsQuery, GetLatestBountyPostsQueryVariables>(GetLatestBountyPostsDocument, baseOptions);
        }
export type GetLatestBountyPostsQueryHookResult = ReturnType<typeof useGetLatestBountyPostsQuery>;
export type GetLatestBountyPostsLazyQueryHookResult = ReturnType<typeof useGetLatestBountyPostsLazyQuery>;
export type GetLatestBountyPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestBountyPostsQuery, GetLatestBountyPostsQueryVariables>;
export const GetLatestMotionPostsDocument = gql`
    query GetLatestMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}, onchain_referendum_id: {_is_null: true}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
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
      onchain_motion_id
      onchain_motion {
        id
        motionStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestMotionPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestMotionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestMotionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestMotionPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestMotionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestMotionPostsQuery, GetLatestMotionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestMotionPostsQuery, GetLatestMotionPostsQueryVariables>(GetLatestMotionPostsDocument, baseOptions);
      }
export function useGetLatestMotionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestMotionPostsQuery, GetLatestMotionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestMotionPostsQuery, GetLatestMotionPostsQueryVariables>(GetLatestMotionPostsDocument, baseOptions);
        }
export type GetLatestMotionPostsQueryHookResult = ReturnType<typeof useGetLatestMotionPostsQuery>;
export type GetLatestMotionPostsLazyQueryHookResult = ReturnType<typeof useGetLatestMotionPostsLazyQuery>;
export type GetLatestMotionPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestMotionPostsQuery, GetLatestMotionPostsQueryVariables>;
export const FetchLatestMotionPostsDocument = gql`
    query FetchLatestMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
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
      onchain_motion_id
      onchain_motion {
        id
        motionStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useFetchLatestMotionPostsQuery__
 *
 * To run a query within a React component, call `useFetchLatestMotionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchLatestMotionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLatestMotionPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFetchLatestMotionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchLatestMotionPostsQuery, FetchLatestMotionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchLatestMotionPostsQuery, FetchLatestMotionPostsQueryVariables>(FetchLatestMotionPostsDocument, baseOptions);
      }
export function useFetchLatestMotionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchLatestMotionPostsQuery, FetchLatestMotionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchLatestMotionPostsQuery, FetchLatestMotionPostsQueryVariables>(FetchLatestMotionPostsDocument, baseOptions);
        }
export type FetchLatestMotionPostsQueryHookResult = ReturnType<typeof useFetchLatestMotionPostsQuery>;
export type FetchLatestMotionPostsLazyQueryHookResult = ReturnType<typeof useFetchLatestMotionPostsLazyQuery>;
export type FetchLatestMotionPostsQueryResult = ApolloReactCommon.QueryResult<FetchLatestMotionPostsQuery, FetchLatestMotionPostsQueryVariables>;
export const GetLatestDemocracyProposalPostsDocument = gql`
    query GetLatestDemocracyProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
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
      onchain_proposal_id
      onchain_proposal {
        id
        proposalStatus(last: 1) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestDemocracyProposalPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestDemocracyProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestDemocracyProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestDemocracyProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestDemocracyProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestDemocracyProposalPostsQuery, GetLatestDemocracyProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestDemocracyProposalPostsQuery, GetLatestDemocracyProposalPostsQueryVariables>(GetLatestDemocracyProposalPostsDocument, baseOptions);
      }
export function useGetLatestDemocracyProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestDemocracyProposalPostsQuery, GetLatestDemocracyProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestDemocracyProposalPostsQuery, GetLatestDemocracyProposalPostsQueryVariables>(GetLatestDemocracyProposalPostsDocument, baseOptions);
        }
export type GetLatestDemocracyProposalPostsQueryHookResult = ReturnType<typeof useGetLatestDemocracyProposalPostsQuery>;
export type GetLatestDemocracyProposalPostsLazyQueryHookResult = ReturnType<typeof useGetLatestDemocracyProposalPostsLazyQuery>;
export type GetLatestDemocracyProposalPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestDemocracyProposalPostsQuery, GetLatestDemocracyProposalPostsQueryVariables>;
export const GetLatestReferendaPostsDocument = gql`
    query GetLatestReferendaPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestReferendaPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestReferendaPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestReferendaPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestReferendaPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestReferendaPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestReferendaPostsQuery, GetLatestReferendaPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestReferendaPostsQuery, GetLatestReferendaPostsQueryVariables>(GetLatestReferendaPostsDocument, baseOptions);
      }
export function useGetLatestReferendaPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestReferendaPostsQuery, GetLatestReferendaPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestReferendaPostsQuery, GetLatestReferendaPostsQueryVariables>(GetLatestReferendaPostsDocument, baseOptions);
        }
export type GetLatestReferendaPostsQueryHookResult = ReturnType<typeof useGetLatestReferendaPostsQuery>;
export type GetLatestReferendaPostsLazyQueryHookResult = ReturnType<typeof useGetLatestReferendaPostsLazyQuery>;
export type GetLatestReferendaPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestReferendaPostsQuery, GetLatestReferendaPostsQueryVariables>;
export const GetLatestTipPostsDocument = gql`
    query GetLatestTipPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_tip_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
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
      onchain_tip_id
      onchain_tip {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestTipPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestTipPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestTipPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestTipPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestTipPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestTipPostsQuery, GetLatestTipPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestTipPostsQuery, GetLatestTipPostsQueryVariables>(GetLatestTipPostsDocument, baseOptions);
      }
export function useGetLatestTipPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestTipPostsQuery, GetLatestTipPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestTipPostsQuery, GetLatestTipPostsQueryVariables>(GetLatestTipPostsDocument, baseOptions);
        }
export type GetLatestTipPostsQueryHookResult = ReturnType<typeof useGetLatestTipPostsQuery>;
export type GetLatestTipPostsLazyQueryHookResult = ReturnType<typeof useGetLatestTipPostsLazyQuery>;
export type GetLatestTipPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestTipPostsQuery, GetLatestTipPostsQueryVariables>;
export const GetLatestDemocracyTreasuryProposalPostsDocument = gql`
    query GetLatestDemocracyTreasuryProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
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
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetLatestDemocracyTreasuryProposalPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestDemocracyTreasuryProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestDemocracyTreasuryProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestDemocracyTreasuryProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestDemocracyTreasuryProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestDemocracyTreasuryProposalPostsQuery, GetLatestDemocracyTreasuryProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLatestDemocracyTreasuryProposalPostsQuery, GetLatestDemocracyTreasuryProposalPostsQueryVariables>(GetLatestDemocracyTreasuryProposalPostsDocument, baseOptions);
      }
export function useGetLatestDemocracyTreasuryProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestDemocracyTreasuryProposalPostsQuery, GetLatestDemocracyTreasuryProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLatestDemocracyTreasuryProposalPostsQuery, GetLatestDemocracyTreasuryProposalPostsQueryVariables>(GetLatestDemocracyTreasuryProposalPostsDocument, baseOptions);
        }
export type GetLatestDemocracyTreasuryProposalPostsQueryHookResult = ReturnType<typeof useGetLatestDemocracyTreasuryProposalPostsQuery>;
export type GetLatestDemocracyTreasuryProposalPostsLazyQueryHookResult = ReturnType<typeof useGetLatestDemocracyTreasuryProposalPostsLazyQuery>;
export type GetLatestDemocracyTreasuryProposalPostsQueryResult = ApolloReactCommon.QueryResult<GetLatestDemocracyTreasuryProposalPostsQuery, GetLatestDemocracyTreasuryProposalPostsQueryVariables>;
export const MyQueryDocument = gql`
    query MyQuery {
  posts_aggregate(where: {type: {id: {_eq: 1}}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
      }
export function useMyQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = ApolloReactCommon.QueryResult<MyQueryQuery, MyQueryQueryVariables>;
export const DiscussionsCountDocument = gql`
    query DiscussionsCount {
  posts_aggregate(where: {type: {id: {_eq: 1}}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useDiscussionsCountQuery__
 *
 * To run a query within a React component, call `useDiscussionsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscussionsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscussionsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useDiscussionsCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DiscussionsCountQuery, DiscussionsCountQueryVariables>) {
        return ApolloReactHooks.useQuery<DiscussionsCountQuery, DiscussionsCountQueryVariables>(DiscussionsCountDocument, baseOptions);
      }
export function useDiscussionsCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DiscussionsCountQuery, DiscussionsCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DiscussionsCountQuery, DiscussionsCountQueryVariables>(DiscussionsCountDocument, baseOptions);
        }
export type DiscussionsCountQueryHookResult = ReturnType<typeof useDiscussionsCountQuery>;
export type DiscussionsCountLazyQueryHookResult = ReturnType<typeof useDiscussionsCountLazyQuery>;
export type DiscussionsCountQueryResult = ApolloReactCommon.QueryResult<DiscussionsCountQuery, DiscussionsCountQueryVariables>;