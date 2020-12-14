// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ERC725Registry extends ethereum.SmartContract {
  static bind(address: Address): ERC725Registry {
    return new ERC725Registry("ERC725Registry", address);
  }

  addAddress(_address: Address): boolean {
    let result = super.call("addAddress", "addAddress(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_addAddress(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("addAddress", "addAddress(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  containsAddress(_address: Address): boolean {
    let result = super.call(
      "containsAddress",
      "containsAddress(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );

    return result[0].toBoolean();
  }

  try_containsAddress(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "containsAddress",
      "containsAddress(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAddress(_index: BigInt): Address {
    let result = super.call("getAddress", "getAddress(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);

    return result[0].toAddress();
  }

  try_getAddress(_index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("getAddress", "getAddress(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAllRawValues(): Array<Bytes> {
    let result = super.call(
      "getAllRawValues",
      "getAllRawValues():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_getAllRawValues(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getAllRawValues",
      "getAllRawValues():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getIndex(_address: Address): BigInt {
    let result = super.call("getIndex", "getIndex(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBigInt();
  }

  try_getIndex(_address: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getIndex", "getIndex(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  length(): BigInt {
    let result = super.call("length", "length():(uint256)", []);

    return result[0].toBigInt();
  }

  try_length(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("length", "length():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeAddress(_address: Address): boolean {
    let result = super.call("removeAddress", "removeAddress(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_removeAddress(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "removeAddress",
      "removeAddress(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddAddressCall extends ethereum.Call {
  get inputs(): AddAddressCall__Inputs {
    return new AddAddressCall__Inputs(this);
  }

  get outputs(): AddAddressCall__Outputs {
    return new AddAddressCall__Outputs(this);
  }
}

export class AddAddressCall__Inputs {
  _call: AddAddressCall;

  constructor(call: AddAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAddressCall__Outputs {
  _call: AddAddressCall;

  constructor(call: AddAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveAddressCall extends ethereum.Call {
  get inputs(): RemoveAddressCall__Inputs {
    return new RemoveAddressCall__Inputs(this);
  }

  get outputs(): RemoveAddressCall__Outputs {
    return new RemoveAddressCall__Outputs(this);
  }
}

export class RemoveAddressCall__Inputs {
  _call: RemoveAddressCall;

  constructor(call: RemoveAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAddressCall__Outputs {
  _call: RemoveAddressCall;

  constructor(call: RemoveAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
