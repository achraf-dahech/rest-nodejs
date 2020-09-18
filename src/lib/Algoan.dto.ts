import { ReadStream } from 'fs';
import { EventName, UsageType, AccountType, BanksUserTransactionType, BanksUserStatus } from './Algoan.enum';
import { SubscriptionStatus, PlugIn, Score, Analysis, LoanDetails } from './Algoan.interface';
import { ApplicationStatus, ExternalError } from './Application.interface';
import {
  DocumentPeriod,
  ESPlugIn,
  FileState,
  Holder,
  LegalDocumentCategory,
  LegalFileType,
  RejectionCode,
  SignatureState,
} from './Folder.interface';

/**
 * POST /subscriptions DTO interface
 */
export interface PostSubscriptionDTO {
  /** Event name to subscribe */
  eventName: EventName;
  /** URL of your service */
  target: string;
  /** Secret to decrypt x-hub-signature (more info [here](https://developers.algoan.com/public/docs/algoan_documentation/resthooks_and_events/resthooks.html#validating-resthook-events)) */
  secret?: string;
}

/**
 * PATCH /subscriptions/:id DTO interface
 */
export interface PatchSubscriptionDTO {
  /** Subscription status to update */
  status: SubscriptionStatus;
}

/**
 * PATCH /banks-user/:id DTO interface
 */
export interface PatchBanksUserDTO {
  status?: BanksUserStatus;
  redirectUrl?: string;
  redirectUrlTTL?: number;
  plugIn?: PlugIn;
  scores?: Score[];
  analysis?: Analysis;
}

/**
 * POST /banks-user/:id/accounts DTO interface
 */
export interface PostBanksUserAccountDTO {
  balance: number;
  balanceDate: string;
  connectionSource: string;
  currency: string;
  type: AccountType;
  usage: UsageType;
  bank?: string;
  bic?: string;
  iban?: string;
  loanDetails?: LoanDetails;
  name?: string;
  reference?: string;
  savingsDetails?: string;
  status?: 'MANUAL' | 'ACTIVE' | 'ERROR' | 'NOT_FOUND' | 'CLOSED';
}

/**
 * POST /banks-user/:id/accounts/:accountId/transactions DTO interface
 */
export interface PostBanksUserTransactionDTO {
  amount: number;
  category: string;
  date: string;
  description: string;
  type: BanksUserTransactionType;
  banksUserCardId?: string;
  currency?: string;
  reference?: string;
  simplifiedDescription?: string;
  userDescription?: string;
}

/**
 * PATCH /applications/:id DTO interface
 */
export interface PatchApplicationDTO {
  status?: ApplicationStatus;
  partnerId?: string;
  skipAggregation?: boolean;
  skipGDPF?: boolean;
  externalErrors?: ExternalError[];
}

/**
 * POST /folders/:id/legal-documents DTO interface
 */
export interface PostLegalDocumentDTO {
  category: LegalDocumentCategory;
  holder: Holder;
  required: boolean;
  partnerId?: string;
  period?: DocumentPeriod;
  redirectUrl?: string;
  redirectUrlTTL?: number;
  rejectionCode?: RejectionCode;
  validFileTypes?: LegalFileType[];
}

/**
 * POST /folders/:id/legal-documents/:id/files DTO interface
 */
export interface PostLegalFileDTO {
  file?: ReadStream;
  rejectionCode?: number;
  state?: FileState;
  type?: LegalFileType;
}

/**
 * POST /folders/:id/signatures DTO interface
 */
export interface PostSignatureDTO {
  holder: Holder;
  legalDocumentIds: string[];
  partnerId: string;
  redirectUrl?: string;
  redirectUrlTTL?: number;
  metadata?: { [key: string]: string | number | boolean };
  plugIn?: ESPlugIn;
  state?: SignatureState;
}

/**
 * PATCH /folders/:id/signatures/:signatureId DTO interface
 */
export interface PatchSignatureDTO {
  plugIn?: ESPlugIn;
  state?: SignatureState;
  redirectUrl?: string;
  redirectUrlTTL?: number;
  holder?: Holder;
}