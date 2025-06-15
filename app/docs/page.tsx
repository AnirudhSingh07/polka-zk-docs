"use client"

import { useState } from "react"
import {
  Copy,
  Check,
  Search,
  Menu,
  X,
  ChevronRight,
  Book,
  Download,
  Play,
  Code,
  Terminal,
  Zap,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const CodeBlock = ({ children, language = "bash", title }: { children: string; language?: string; title?: string }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group mb-2">
      {title && (
        <div className="bg-slate-800 px-4 py-2 text-sm text-gray-300 border-b border-slate-700 rounded-t-lg">
          {title}
        </div>
      )}
      <div className="bg-slate-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
          <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0 text-gray-400 hover:text-black"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </Button>
        </div>
        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("getting-started")

  const navigation = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Book,
      subsections: [
        { id: "overview", title: "Overview" },
        { id: "prerequisites", title: "Prerequisites" },
        { id: "quick-start", title: "Quick Start" },
      ],
    },
    {
      id: "installation",
      title: "Installation",
      icon: Download,
      subsections: [
        { id: "Install-dependencies", title: "Install Dependencies" }
      ],
    },
    {
      id: "usage",
      title: "Usage",
      icon: Play,
      subsections: [
        { id: "compile-circom-circuit", title: "Compile Circom Circuit" }
      ],
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "getting-started":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Getting Started</h1>
              <p className="text-xl text-gray-300 mb-8">
                Welcome to PolkaZK - the premier zero-knowledge development platform for the Polkadot ecosystem.
              </p>
            </div>

            <section id="overview">
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  PolkaZK simplifies zero-knowledge proof development by providing a complete web-based platform for
                  writing, compiling, and deploying Circom circuits to Polkadot parachains.
                </p>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <Card className="bg-pink-600/10 border-pink-600/30">
                    <CardHeader className="pb-3">
                      <Code className="h-8 w-8 text-pink-400 mb-2" />
                      <CardTitle className="text-white text-lg">Write Circuits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        Use our web-based editor with Polkadot-optimized templates
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-600/10 border-purple-600/30">
                    <CardHeader className="pb-3">
                      <Terminal className="h-8 w-8 text-purple-400 mb-2" />
                      <CardTitle className="text-white text-lg">Compile & Setup</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        Automatic compilation to PolkaVM with trusted setup
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="bg-pink-600/10 border-pink-600/30">
                    <CardHeader className="pb-3">
                      <Zap className="h-8 w-8 text-pink-400 mb-2" />
                      <CardTitle className="text-white text-lg">Deploy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        One-click deployment to 50+ Polkadot parachains
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section id="prerequisites">
              <h2 className="text-2xl font-semibold text-white mb-4">Prerequisites</h2>
              <div className="space-y-4">
                <p className="text-gray-300">Before getting started with PolkaZK, ensure you have:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Basic understanding of zero-knowledge proofs</li>
                  <li>Familiarity with Circom circuit language</li>
                  <li>Knowledge of Polkadot ecosystem and parachains</li>
                  <li>A Polkadot wallet (Polkadot.js extension recommended)</li>
                </ul>
                <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 mt-6">
                  <h4 className="text-blue-400 font-semibold mb-2">💡 New to Zero-Knowledge Proofs?</h4>
                  <p className="text-gray-300 text-sm">
                    Check out our{" "}
                    <a href="#" className="text-pink-400 hover:underline">
                      ZK Learning Resources
                    </a>{" "}
                    to get up to speed with the fundamentals.
                  </p>
                </div>
              </div>
            </section>

            <section id="quick-start">
              <h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
              <div className="space-y-6">
                <p className="text-gray-300">
                  Get your first ZK circuit deployed to a Polkadot parachain in under 5 minutes:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Add Passethub as network in your wallet Using following details
</h4>
                     
                      <div className="gap-2 ">
                      <CodeBlock language="Network Name : " >Westend Asset Hub
                      </CodeBlock>
                      <CodeBlock language="Default RPC URL :">https://testnet-passet-hub-eth-rpc.polkadot.io
                      </CodeBlock>
                      <CodeBlock language="Chain ID :">420420421
                      </CodeBlock>
                      <CodeBlock language="Currency Symbol :">PAS
                      </CodeBlock>
                      <CodeBlock language="Block Explorer URL :">https://blockscout-passet-hub.parity-testnet.parity.io/
                      </CodeBlock>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Get testnet tokens from the above faucet after configuration of wallet is done</h4>
                      <CodeBlock language="website" >
                        {`https://faucet.polkadot.io/?parachain=1111`}
                      </CodeBlock>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Create Your First Circuit</h4>
                      <p className="text-gray-300 mb-3">Use our template for a simple multiplier circuit:</p>
                      <CodeBlock language="circom" title="multiplier.circom">
                        {`pragma circom 2.0.0;

template Multiplier() {
    signal input a;
    signal input b;
    signal output c;
    
    c <== a * b;
}

component main = Multiplier();`}
                      </CodeBlock>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Deploy to Parachain</h4>
                      <p className="text-gray-300 mb-3">Select your target parachain and deploy:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-3">
                        <li>Choose from 50+ supported parachains</li>
                        <li>Click "Compile & Deploy"</li>
                        <li>Wait for compilation and deployment</li>
                        <li>Get your verifier contract address</li>
                      </ul>
                    </div>
                  </div> */}
                </div>

                <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">🎉 Congratulations!</h4>
                  <p className="text-gray-300 text-sm">
                    Now you can use Polka ZK Verifier!
                  </p>
                </div>
              </div>
            </section>
          </div>
        )

      case "installation":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Installation</h1>
              <p className="text-xl text-gray-300 mb-8">
                Set up PolkaZK locally for development or deploy your own instance.
              </p>
            </div>

            {/* <section id="system-requirements">
              <h2 className="text-2xl font-semibold text-white mb-4">System Requirements</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Minimum Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">OS:</span>
                        <span className="text-white">Linux, macOS, Windows</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">RAM:</span>
                        <span className="text-white">8GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Storage:</span>
                        <span className="text-white">10GB free space</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Node.js:</span>
                        <span className="text-white">18.0+</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Recommended</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">OS:</span>
                        <span className="text-white">Ubuntu 22.04 LTS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">RAM:</span>
                        <span className="text-white">16GB+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Storage:</span>
                        <span className="text-white">50GB SSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Node.js:</span>
                        <span className="text-white">20.0+</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section> */}

            <section id="local-setup">
              <h2 className="text-2xl font-semibold text-white mb-4">Local Setup</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Install Dependencies</h3>
                  <p className="text-gray-300 mb-4">First, install the required system dependencies:</p>

                  <div className="space-y-4">
                    {/* <div>
                      <h4 className="text-white font-medium mb-2">Ubuntu/Debian:</h4>
                      <CodeBlock language="bash">
                        {`sudo apt update
sudo apt install -y curl git build-essential
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs`}
                      </CodeBlock>
                    </div> */}

                    <div>
                      <h4 className="text-white font-medium mb-2">PowerShell:</h4>
                      <CodeBlock language="bash">
                        {` npm install zk-polka-sdk@latest `}
                      </CodeBlock>
                    </div>

                    {/* <div>
                      <h4 className="text-white font-medium mb-2">Windows:</h4>
                      <CodeBlock language="powershell">
                        {`# Install using Chocolatey
choco install nodejs git

# Or download from official websites:
# Node.js: https://nodejs.org/
# Git: https://git-scm.com/`}
                      </CodeBlock>
                    </div> */}
                  </div>
                </div>

                {/* <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Install Circom & SnarkJS</h3>
                  <p className="text-gray-300 mb-4">Install the zero-knowledge proof tools:</p>
                  <CodeBlock language="bash">
                    {`# Install Circom
git clone https://github.com/iden3/circom.git
cd circom
cargo build --release
cargo install --path circom
cd ..

# Install SnarkJS
npm install -g snarkjs

# Verify installations
circom --version
snarkjs --version`}
                  </CodeBlock>
                </div> */}

                {/* <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Install Parity Revive</h3>
                  <p className="text-gray-300 mb-4">Install the PolkaVM compilation toolchain:</p>
                  <CodeBlock language="bash">
                    {`# Install Rust if not already installed
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Install Parity Revive
cargo install --git https://github.com/paritytech/revive revive-cli

# Verify installation
revive --version`}
                  </CodeBlock>
                </div> */}

                {/* <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Clone & Setup PolkaZK</h3>
                  <p className="text-gray-300 mb-4">Clone the repository and install dependencies:</p>
                  <CodeBlock language="bash">
                    {`# Clone the repository
git clone https://github.com/polkazk/polkazk-platform.git
cd polkazk-platform

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Copy environment variables
cp .env.example .env`}
                  </CodeBlock>
                </div> */}

                {/* <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Configure Environment</h3>
                  <p className="text-gray-300 mb-4">Set up your environment variables:</p>
                  <CodeBlock language="bash" title=".env">
                    {`# Polkadot Configuration
POLKADOT_RPC_URL=wss://rpc.polkadot.io
PARACHAIN_RPC_URLS=wss://acala-rpc.aca-api.network,wss://wss.api.moonbeam.network

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/polkazk

# Storage
STORAGE_PATH=./storage
CIRCUITS_PATH=./circuits

# Security
JWT_SECRET=your-jwt-secret-here
ENCRYPTION_KEY=your-encryption-key-here`}
                  </CodeBlock>
                </div> */}

                {/* <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Start Development Servers</h3>
                  <p className="text-gray-300 mb-4">Run the frontend and backend servers:</p>
                  <CodeBlock language="bash">
                    {`# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev

# Access the application at http://localhost:3000`}
                  </CodeBlock>
                </div> */}
              </div>
            </section>

            {/* <section id="docker-setup">
              <h2 className="text-2xl font-semibold text-white mb-4">Docker Setup</h2>
              <div className="space-y-6">
                <p className="text-gray-300">
                  For a quick setup, use our Docker configuration to run PolkaZK with all dependencies included.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Install Docker</h3>
                  <CodeBlock language="bash">
                    {`# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# macOS
brew install --cask docker

# Windows: Download Docker Desktop from docker.com`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Run with Docker Compose</h3>
                  <CodeBlock language="bash">
                    {`# Clone and navigate to repository
git clone https://github.com/polkazk/polkazk-platform.git
cd polkazk-platform

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Access the application at http://localhost:3000`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Docker Commands</h3>
                  <CodeBlock language="bash">
                    {`# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up --build -d

# View running containers
docker-compose ps

# Execute commands in container
docker-compose exec backend npm run migrate`}
                  </CodeBlock>
                </div>

                <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Production Deployment</h4>
                  <p className="text-gray-300 text-sm">
                    For production deployments, make sure to update the environment variables, use proper SSL
                    certificates, and configure your firewall settings appropriately.
                  </p>
                </div>
              </div>
            </section> */}
          </div>
        )

      case "usage":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Usage</h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn how to use PolkaZK to build, compile, and deploy zero-knowledge circuits.
              </p>
            </div>

            <section id="compile-circom-circuit">
              <h2 className="text-2xl font-semibold text-white mb-4">Compile Circom Circuit</h2>
              <div className="space-y-6">
                <div>
                  <CodeBlock language="Powershell">
                    {`npx zk-polka-sdk compile <path-to-your-circom-file>`}
                  </CodeBlock>
                </div>
                <p className="text-gray-300">
                  This command:
                 <li> Compiles your .circom file </li> 
                 <li> Runs Groth16 trusted setup </li>
                 <li> Outputs .r1cs, .wasm, circuit_final.zkey, and verifier.sol </li>  
                 <li> All files are saved in a folder named after your circuit (e.g., ./yourCircuit/)</li> 
                </p>

                

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">✅ Test Compiled Circom Circuit</h3>
                  <h4 className="text-white font-medium mb-2">Command:</h4>
                      
                      <CodeBlock language="Powershell" >
                        {`npx zk-polka-sdk test <path-to-generated-folder> <path-to-input.json>`}
                      </CodeBlock>
                    </div>
                  <p className="text-gray-300 mb-4">
                    This command:

<li> Tests the zk System produced by the compile command </li>
<li>Uses inputs provided by the developer from input.json provided </li>
<li>produces proof.json and public.json</li>
<li>proof.json contains the smart contract parameters, which will be used to verify it onchain</li>
<li>public.json contains human verifiable outputs and proofs</li>
                  </p>

                  <div className="space-y-4">
                    <div>
                      

                    <div>
                      <h3 className="text-white font-medium mb-2">✅ Deploy Compiled Circom Circuit</h3>
                      <div className="mt-3 mb-3">
                      <CodeBlock language="powershell" >
                        {`npx zk-polka-sdk deploy <path-to-generated-folder> <PRIVATE_KEY_OF_WALLET>`}
                      </CodeBlock>
                      </div>
                      <p className="text-gray-300 mb-4">
                        This command:

<li> Compiles verifier.sol generated during compilation to .polkavm binary </li>
<li>Converts the binary to hex and deploys it to PolkaVM via cast send --create </li>
<li>Deploys the .polkavm binary to PolkaVM Blockchain, taking fees from the provided wallet's private key</li>
                      </p>
                      
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">✅ Verify ZK Proof Programmatically</h3>
                  <p className="text-gray-300 mb-3">You can verify a proof directly using a single function call.</p>
                  <CodeBlock language="powershell" >
                        {`const { verifyProof } = require("zk-polka-sdk");

const result = await verifyProof({
  input: {
    // Your circuit input goes here
  },
  "<relative-path-to-generated-folder>",
});

console.log(result ? "✅ Valid proof" : "❌ Invalid proof");`}
                      </CodeBlock>

                      <p className="text-gray-300 p-2 mt-1"> 
                       <li className="mb-1"> You pass input (in the form of json) & Relative path to the generated folder, which was generated during compilation process </li>
<li className="mb-1"> Automatically generates the proof and public signals </li>
<li className="mb-1">Formats the calldata for the Solidity verifier </li>
<li className="mb-1">Calls the deployed verifier contract on PolkaVM and returns the result </li>
                      </p>

                      <h3 className="text-3xl font-semibold mt-4 text-white mb-3">You don’t need to manually use snarkjs or interact with web3 directly — the SDK abstracts it all for you.</h3>
                      <h3 className="text-2xl font-semibold mt-4 text-gray-300 mb-3">🛠 Commands Overview</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{ 'npx zk-polka-sdk compile <path-to-circuit>' }</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300">
                          Compiles the .circom file and runs Groth16 setup
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{' npx zk-polka-sdk test <output-folder> <path-to-input.json> '}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300">
                          Tests the Circom logic locally using ZK Proofs.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white text-lg"> {' npx zk-polka-sdk deploy <output-folder> <private-key> '}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300">
                          Deploys the verifier contract to PolkaVM
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{' verifyProof(input,"<relative-path-to-output-folder>") (programmatic only) '}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300">
                          Generates proof and verifies it on-chain using deployed contract
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <section id="Examples">
              <h2 className="text-2xl font-semibold text-white mb-4">Examples: </h2>
              <h3 className="texty-xl font-semibold text-gray-300">Example 1</h3>
              <div className="space-y-6">
                

                <div>
                        <CodeBlock language="Circom">
                          {`pragma circom 2.0.0;

include "comparators.circom";

template IsAdult() {
    signal input birthYear;
    signal output isAdult;

    var currentYear = 2025;

    signal age;
    age <== currentYear - birthYear;

    component gte18 = GreaterEqThan(16);  // compare 16-bit numbers
    gte18.in[0] <== age;
    gte18.in[1] <== 18;

    isAdult <== gte18.out;
}

component main = IsAdult();`}
                        </CodeBlock>
                      </div>
                    </div>

                    <h3 className="texty-xl font-semibold text-gray-300 mt-3">Example 2</h3>
              <div className="space-y-6">
                

                <div>
                        <CodeBlock language="Circom">
                          {`template SumCheck() {
    signal input a;
    signal input b;
    signal output sum;

    sum <== a + b;
}

component main = SumCheck();`}
                        </CodeBlock>
                      </div>
                    </div>
                    {/* <div className="flex items-start space-x-4">
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Trusted Setup</h4>
                        <p className="text-gray-300 mb-3">Groth16 trusted setup is performed automatically:</p>
                        <CodeBlock language="bash">
                          {`# Powers of Tau ceremony (cached for common circuits)
snarkjs powersoftau new bn128 12 pot12_0000.ptau

# Circuit-specific setup
snarkjs groth16 setup circuit.r1cs pot12_final.ptau circuit_0000.zkey

# Generate verification key
snarkjs zkey export verificationkey circuit_final.zkey verification_key.json`}
                        </CodeBlock>
                      </div>
                    </div> */}

                    
                
            
            </section> 

            {/* <section id="deployment">
              <h2 className="text-2xl font-semibold text-white mb-4">Deployment</h2>
              <div className="space-y-6">
                <p className="text-gray-300">
                  Deploy your compiled circuits to any of the 50+ supported Polkadot parachains with one-click
                  deployment.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Supported Parachains</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader className="pb-3">
                        <Badge className="w-fit bg-pink-600/20 text-pink-400">DeFi</Badge>
                        <CardTitle className="text-white text-lg">Acala</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300 text-sm">
                          DeFi hub with native DOT staking and cross-chain liquidity.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader className="pb-3">
                        <Badge className="w-fit bg-purple-600/20 text-purple-400">Smart Contracts</Badge>
                        <CardTitle className="text-white text-lg">Moonbeam</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300 text-sm">
                          Ethereum-compatible smart contract platform.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader className="pb-3">
                        <Badge className="w-fit bg-pink-600/20 text-pink-400">Infrastructure</Badge>
                        <CardTitle className="text-white text-lg">Astar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300 text-sm">
                          Multi-VM smart contract hub supporting WASM and EVM.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Deployment Process</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">1. Select Target Parachain</h4>
                      <CodeBlock language="javascript" title="deployment-config.js">
                        {`const deploymentConfig = {
  parachain: 'acala',
  network: 'testnet', // or 'mainnet'
  gasLimit: 5000000,
  gasPrice: 'auto',
  account: 'YOUR_POLKADOT_ACCOUNT'
};`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">2. Deploy via Web Interface</h4>
                      <p className="text-gray-300 mb-3">Use the PolkaZK web interface for easy deployment:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Select your compiled circuit</li>
                        <li>Choose target parachain from dropdown</li>
                        <li>Configure deployment parameters</li>
                        <li>Sign transaction with your Polkadot wallet</li>
                        <li>Monitor deployment progress</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">3. Deploy via API</h4>
                      <CodeBlock language="javascript" title="deploy-api.js">
                        {`const deployment = await fetch('/api/deploy', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    compilationId: 'your-compilation-id',
    parachain: 'acala',
    network: 'testnet',
    account: 'YOUR_ACCOUNT_ADDRESS'
  })
});

const result = await deployment.json();
console.log('Deployment ID:', result.deploymentId);
console.log('Transaction Hash:', result.txHash);

// Monitor deployment status
const status = await fetch(\`/api/deploy/\${result.deploymentId}/status\`);
const statusData = await status.json();

if (statusData.status === 'deployed') {
  console.log('Verifier Contract Address:', statusData.contractAddress);
  console.log('Deployment Block:', statusData.blockNumber);
}`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Proof Generation & Verification</h3>
                  <p className="text-gray-300 mb-4">Once deployed, you can generate and verify proofs:</p>
                  <CodeBlock language="javascript" title="proof-generation.js">
                    {`// Generate proof
const input = {
  a: 3,
  b: 4
};

const { proof, publicSignals } = await snarkjs.groth16.fullProve(
  input,
  "circuit.wasm",
  "circuit_final.zkey"
);

// Verify proof on-chain
const contract = new Contract(verifierAddress, verifierABI, signer);
const isValid = await contract.verifyProof(
  proof.pi_a,
  proof.pi_b,
  proof.pi_c,
  publicSignals
);

console.log('Proof is valid:', isValid);`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cross-Chain Verification</h3>
                  <p className="text-gray-300 mb-4">Verify proofs across multiple parachains using XCMP:</p>
                  <CodeBlock language="javascript" title="cross-chain-verification.js">
                    {`// Deploy to multiple parachains
const deployments = await Promise.all([
  deployToParachain('acala', compilationId),
  deployToParachain('moonbeam', compilationId),
  deployToParachain('astar', compilationId)
]);

// Verify proof on origin chain
const originProof = await generateProof(input, 'acala');

// Cross-chain verification via XCMP
const xcmpMessage = {
  destination: 'moonbeam',
  proof: originProof,
  verifierAddress: deployments[1].contractAddress
};

const xcmpResult = await sendXCMPMessage(xcmpMessage);
console.log('Cross-chain verification:', xcmpResult.success);`}
                  </CodeBlock>
                </div>

                <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">🚀 Production Ready</h4>
                  <p className="text-gray-300 text-sm">
                    Your deployed circuits are production-ready and can handle real-world zero-knowledge proof
                    verification with enterprise-grade security backed by Polkadot's shared security model.
                  </p>
                </div>
              </div>
            </section> */}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-white"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Shield className="h-6 w-6 text-pink-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-lg font-bold text-white">{'Polka'}</span>
                <span className="text-lg font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {'ZK'}
                </span>
                <span className="text-gray-400">{'/ Docs'}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400 w-64"
                />
              </div>
              <Button variant="ghost" className="text-white hover:text-pink-400">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-black/20 backdrop-blur-sm border-r border-white/10 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6 pt-20 lg:pt-6">
            <nav className="space-y-2">
              {navigation.map((section) => (
                <div key={section.id}>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full justify-start text-left ${
                      activeSection === section.id
                        ? "bg-pink-600/20 text-pink-400 border-pink-600/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <section.icon className="h-4 w-4 mr-3" />
                    {section.title}
                  </Button>
                  {activeSection === section.id && (
                    <div className="ml-7 mt-2 space-y-1">
                      {section.subsections.map((subsection) => (
                        <a
                          key={subsection.id}
                          href={`#${subsection.id}`}
                          className="block py-1 text-sm text-gray-400 hover:text-pink-400 transition-colors"
                        >
                          {subsection.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
              <span>{'Docs'}</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-pink-400 capitalize">
                {navigation.find((nav) => nav.id === activeSection)?.title}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">{renderContent()}</div>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
              <div>
                {navigation.findIndex((nav) => nav.id === activeSection) > 0 && (
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setActiveSection(navigation[navigation.findIndex((nav) => nav.id === activeSection) - 1].id)
                    }
                    className="text-gray-300 hover:text-black"
                  >
                    ← Previous
                  </Button>
                )}
              </div>
              <div>
                {navigation.findIndex((nav) => nav.id === activeSection) < navigation.length - 1 && (
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setActiveSection(navigation[navigation.findIndex((nav) => nav.id === activeSection) + 1].id)
                    }
                    className="text-gray-300 hover:text-black"
                  >
                    Next →
                  </Button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
