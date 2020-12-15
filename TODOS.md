Currently this is kinda working. We can get data from the blockchain, put it in a DB, and the client can query this through GraphQL


Next steps.

We want to make it handle on the existing blockchain deployed.

Parsing and querying all

* Profiles
* Assets
* ProfileData


As it stands now, there is Factory Contract yet, so we will handle this as follows.


There is a controller contract which has a list of all profiles.

We can listen for events from this contract and put the relevant profile and asset data into the DB.



1. Naming Conventions: Redo these as necessary for proper mapping
2. After looping over listing of ERC725 profiles from (address below)

Service Registry Address: "0x9c2624f379CB8A876255e7d4D8A286ce6CA27c56"


This has all profiles registered with it (on the Lukso testnet)


Afterwards

Replace the calls to the existing relayers server to the new graph server for the existing univeralprofiles website

Later we will add assets


Then we will update the interface


optoins in user story eventuall:

store data in distrubted (ipfs) vs hosted datastore

Some notes:


Currently there is technically no 'manager' or 'factory' contract explicitly. Instead there is a service acting as a manager which is calling contracts in sequence (obstensibly to save gas).


As such we will treat the main registry contract as the manager (TheGraph docs imply this as a case).