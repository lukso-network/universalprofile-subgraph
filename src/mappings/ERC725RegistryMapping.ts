import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ethereum } from '@graphprotocol/graph-ts'
import {
  AddAddressCall,
  RemoveAddressCall
} from "../../generated/Contract/ERC725Registry"
import { ERC725Registry } from "../../generated/schema"
import { ERC725 } from "../../generated/templates"
import { Block } from "../../generated/schema"

export function handleAddAddressCall(call: AddAddressCall) : void {
  let registry = ERC725Registry.load("0xCC8c556EE154151d0A67b6e7F871fa8C6B263A8D")
  if (registry == null) {
    registry = new ERC725Registry("0xCC8c556EE154151d0A67b6e7F871fa8C6B263A8D")
  }

  // Set array values
  let registryAddressesArray = registry.addresses || []
  let addressDuplicates = registryAddressesArray.includes(call.inputs._address)
  let address = call.inputs._address
  if (!addressDuplicates) {
    registryAddressesArray.push(address)
  }

  registry.addresses = registryAddressesArray
  registry.save()

  // This should be in conditional for duplicates above. Just here for testing now
  // let id = call.transaction.hash.toHex()
  ERC725.create(address)
}

export function handleRemoveAddressCall(call: RemoveAddressCall) : void {

}

export function handleBlockWithContractCall(block: ethereum.Block): void {
  let id = block.hash.toHex()
  let entity = new Block(id)
  entity.save()
}