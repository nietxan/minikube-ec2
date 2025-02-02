import * as aws from "@pulumi/aws";

const size = "t3.medium";

const ami = aws.ec2.getAmiOutput({
    filters: [{
        name: "name",
        values: ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"],
    }],
	mostRecent: true,
	owners: ["099720109477"],
});

const group = new aws.ec2.SecurityGroup("minikube", {
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 6443, toPort: 6443, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 8443, toPort: 8443, cidrBlocks: ["0.0.0.0/0"] },
    ],

	egress: [{
		fromPort: 0,
		toPort: 0,
		protocol: "-1",
		cidrBlocks: ["0.0.0.0/0"],
		ipv6CidrBlocks: ["::/0"],
	}]
});

const server = new aws.ec2.Instance("minikube", {
    instanceType: size,
    vpcSecurityGroupIds: [ group.id ],
    ami: ami.id,
	keyName: "minikube",
	tags: {
		Name: "minikube",
	},
});

export const publicIp = server.publicIp;
export const publicHostName = server.publicDns;
