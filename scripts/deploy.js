async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);
    const Rng = await ethers.getContractFactory("Rng");
    const rng = await Rng.deploy();
    console.log("Contract address:", rng.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
