import {
  CreatePiggy as CreatePiggyEvent,
  TransferPiggy as TransferPiggyEvent,
  UpdateRFP as UpdateRFPEvent,
  ReclaimAndBurn as ReclaimAndBurnEvent,
  StartAuction as StartAuctionEvent,
  EndAuction as EndAuctionEvent,
  SatisfyAuction as SatisfyAuctionEvent,
  RequestSettlementPrice as RequestSettlementPriceEvent,
  OracleReturned as OracleReturnedEvent,
  SettlePiggy as SettlePiggyEvent,
  ClaimPayout as ClaimPayoutEvent
} from "../generated/Contract/Contract"
import {
  Piggy,
  TransferPiggy,
  UpdateRFP,
  ReclaimAndBurn,
  StartAuction,
  EndAuction,
  SatisfyAuction,
  RequestSettlementPrice,
  OracleReturned,
  SettlePiggy,
  ClaimPayout
} from "../generated/schema"

export function handleCreatePiggy(event: CreatePiggyEvent): void {
  let entity = new Piggy(
    event.params.tokenId.toString()
  )
  entity.from = event.params.from
  entity.collateral = event.params.collateral
  entity.lotSize = event.params.lotSize
  entity.strike = event.params.strike
  entity.expiryBlock = event.params.expiryBlock
  entity.isEuro = event.params.isEuro
  entity.isPut = event.params.isPut
  entity.RFP = event.params.RFP
  entity.isOnAuction = false
  entity.save()
}

export function handleTransferPiggy(event: TransferPiggyEvent): void {
  let entity = new TransferPiggy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleUpdateRFP(event: UpdateRFPEvent): void {
  let entity = new UpdateRFP(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.tokenId = event.params.tokenId
  entity.collateralERC = event.params.collateralERC
  entity.premiumERC = event.params.premiumERC
  entity.dataResolverNow = event.params.dataResolverNow
  entity.dataResolverAtExpiry = event.params.dataResolverAtExpiry
  entity.reqCollateral = event.params.reqCollateral
  entity.lotSize = event.params.lotSize
  entity.strikePrice = event.params.strikePrice
  entity.expiry = event.params.expiry
  entity.isEuro = event.params.isEuro
  entity.isPut = event.params.isPut
  entity.save()
}

export function handleReclaimAndBurn(event: ReclaimAndBurnEvent): void {
  let entity = new ReclaimAndBurn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.tokenId = event.params.tokenId
  entity.RFP = event.params.RFP
  entity.save()
}

export function handleStartAuction(event: StartAuctionEvent): void {
  let entity = new Piggy(
    event.params.tokenId.toString()
  )
  entity.startBlock = event.params.startBlock
  entity.startPrice = event.params.startPrice
  entity.reservePrice = event.params.reservePrice
  entity.auctionLength = event.params.auctionLength
  entity.timeStep = event.params.timeStep
  entity.priceStep = event.params.priceStep
  entity.isOnAuction = true
  entity.auctionDuration = event.params.startBlock.plus(event.params.auctionLength)
  entity.save()
}

export function handleEndAuction(event: EndAuctionEvent): void {
  let entity = new EndAuction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.tokenId = event.params.tokenId
  entity.RFP = event.params.RFP
  entity.save()
}

export function handleSatisfyAuction(event: SatisfyAuctionEvent): void {
  let entity = new SatisfyAuction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.tokenId = event.params.tokenId
  entity.paidPremium = event.params.paidPremium
  entity.change = event.params.change
  entity.auctionPremium = event.params.auctionPremium
  entity.save()
}

export function handleRequestSettlementPrice(
  event: RequestSettlementPriceEvent
): void {
  let entity = new RequestSettlementPrice(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.feePayer = event.params.feePayer
  entity.tokenId = event.params.tokenId
  entity.oracleFee = event.params.oracleFee
  entity.dataResolver = event.params.dataResolver
  entity.save()
}

export function handleOracleReturned(event: OracleReturnedEvent): void {
  let entity = new OracleReturned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.resolver = event.params.resolver
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.save()
}

export function handleSettlePiggy(event: SettlePiggyEvent): void {
  let entity = new SettlePiggy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.tokenId = event.params.tokenId
  entity.holderPayout = event.params.holderPayout
  entity.writerPayout = event.params.writerPayout
  entity.save()
}

export function handleClaimPayout(event: ClaimPayoutEvent): void {
  let entity = new ClaimPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.paymentToken = event.params.paymentToken
  entity.save()
}
