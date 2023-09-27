const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('SIT722-2023-T3-GLOSSARY'));

app.get('/', (req, res) => {

  res.send(`
    
<!DOCTYPE html>
<html>
<head>
    <title>SIT722 DevOps Glassory</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body     margin= auto,
padding= 50px,
font-family= Arial, Helvetica, sans-serif;>
    <h1>SIT722 DevOps Glassory</h1>
    <p>Welcome to my website showing a collection of DevOps terms and their brief description.</p>
    <table  width = auto, margin= auto, font-size= 13px;
    text-align= center,
    border= 1px solid black,
  border-collapse= collapse>
        <tr>
            <th>ID#</th>
            <th>Term</th>
            <th>Description</th>
            <th>References</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Continuous Integration (CI)</td>
            <td>Continuous Integration is the practice of frequently integrating code changes into a shared repository. Each integration is automatically verified by running automated tests, ensuring that the codebase is always in a working state. CI reduces integration problems and helps teams deliver code faster and with higher quality.</td>
            <td>Martin Fowler - "Continuous Integration" (https://martinfowler.com/articles/continuousIntegration.html)</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Continuous Delivery (CD)</td>
            <td>Continuous Delivery extends CI by automatically deploying code changes to production or staging environments after successful testing. It ensures that code is always in a releasable state, allowing teams to release new features and bug fixes rapidly and reliably.</td>
            <td>Jez Humble and David Farley - "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation" (https://www.oreilly.com/library/view/continuous-delivery-reliable/9780321670250/)</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Infrastructure as Code (IaC)</td>
            <td>Infrastructure as Code is the practice of managing and provisioning infrastructure (servers, networks, etc.) using code and automation tools. IaC enables version control, consistency, and reproducibility of infrastructure, reducing manual errors and simplifying system management.</td>
            <td>Kief Morris - "Infrastructure as Code: Managing Servers in the Cloud" (https://www.oreilly.com/library/view/infrastructure-as-code/9781491924389/)</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Microservices</td>
            <td>Microservices is an architectural style that structures an application as a collection of small, independent services. Each service focuses on a specific business capability and communicates with others through APIs. This approach enhances scalability, flexibility, and allows teams to develop and deploy services independently.</td>
            <td>Sam Newman - "Building Microservices: Designing Fine-Grained Systems" (https://www.oreilly.com/library/view/building-microservices-designing/9781491950340/)</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Version Control System (VCS)</td>
            <td>Version Control System is a software tool that enables teams to track changes to code and other artifacts. It allows developers to collaborate effectively, manage conflicts, and roll back changes when needed. Git is one of the most popular VCS used in DevOps workflows.</td>
            <td>Eric Sink - "Version Control by Example" (https://ericsink.com/vcbe/)</td>

        </tr>
        <tr>
            <td>6</td>
            <td>Monitoring and Observability</td>
            <td>Monitoring and Observability are essential practices in DevOps for gaining insights into the performance and behavior of applications and infrastructure. Monitoring focuses on collecting metrics, while observability emphasizes understanding the system's internal state based on those metrics.</td>
            <td>Cindy Sridharan - "Distributed Systems Observability" (https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/)</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Automated Testing</td>
            <td>Automated Testing involves using tools and scripts to automatically test software applications. It includes unit tests, integration tests, and end-to-end tests. Automated testing helps ensure the application's quality and enables rapid and reliable deployments.</td>
            <td>Jeff Payne - "Continuous Testing for DevOps Professionals" (https://www.oreilly.com/library/view/continuous-testing-for-devops/9780134193186/)</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Containerization</td>
            <td>Containerization is a technology that allows applications and their dependencies to be packaged and isolated from the underlying system. Docker is a popular containerization platform, enabling consistent deployment across different environments.</td>
            <td> Nigel Poulton - "The Kubernetes Book" (https://leanpub.com/thekubernetesbook)</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Configuration Management</td>
            <td>Configuration Management is the process of automating the management of software configurations and system settings. It ensures consistency across various environments and simplifies the deployment and scaling of applications.</td>
            <td>Stephen Nelson-Smith - "Test-Driven Infrastructure with Chef" (https://www.oreilly.com/library/view/test-driven-infrastructure-with/9781449361685/)</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Incident Management:</td>
            <td>Incident Management involves identifying, responding to, and resolving incidents or disruptions in the production environment. It aims to restore normal operations as quickly as possible and minimize the impact on users.</td>
            <td>Rob Schnepp et al. - "Seeking SRE: Conversations About Running Production Systems at Scale" (https://www.oreilly.com/library/view/seeking-sre/9781491978863/)</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Immutable Infrastructure</td>
            <td>Description: Immutable Infrastructure is an approach where once an infrastructure component is deployed, it is never modified. Any changes result in the creation of a new component.</td>
            <td>https://www.thoughtworks.com/insights/blog/immutable-infrastructure</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Container Orchestration</td>
            <td>Container Orchestration involves managing the deployment, scaling, and management of containerized applications, often using tools like Kubernetes.</td>
            <td>https://kubernetes.io/docs/home/</td>
        </tr>
        <tr>
            <td>13</td>
            <td>ChatOps</td>
            <td>ChatOps is a collaboration model where development, IT operations, and business teams communicate and perform tasks within a chat platform, often integrated with automation.</td>
            <td>https://www.atlassian.com/software/chatops</td>
        </tr>
        <tr>
            <td>14</td>
            <td>GitOps</td>
            <td>GitOps is a methodology where infrastructure and application configuration are managed declaratively through version-controlled Git repositories.</td>
            <td>https://www.weave.works/technologies/gitops/</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Infrastructure Scalability</td>
            <td>Infrastructure Scalability involves designing systems that can handle increased workloads by adding resources, enabling applications to grow as demand rises.</td>
            <td>https://aws.amazon.com/architecture/scalability/</td>
        </tr>
        <tr>
            <td>16</td>
            <td>Capacity Planning</td>
            <td>Capacity Planning is the process of determining the resources required for an application or system to meet performance and scalability requirements.</td>
            <td>https://theartofservice.com/capacity-planning-4.html</td>
        </tr>
        <tr>
            <td>17</td>
            <td>DevSecOps</td>
            <td>DevSecOps integrates security practices into the DevOps process, ensuring that security considerations are addressed throughout the software development lifecycle.</td>
            <td>https://www.redhat.com/en/topics/devops/what-is-devsecops</td>
        </tr>
        <tr>
            <td>18</td>
            <td>Site Reliability Engineering (SRE)</td>
            <td>SRE is a discipline that applies software engineering practices to infrastructure and operations problems to create scalable and reliable systems.</td>
            <td>https://sre.google/</td>
        </tr>
        <tr>
            <td>19</td>
            <td>Serverless Computing</td>
            <td>Serverless Computing is a cloud computing model where cloud providers automatically manage the infrastructure, allowing developers to focus solely on writing code.</td>
            <td>https://aws.amazon.com/serverless/</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Blue-Green Deployment</td>
            <td>Blue-Green Deployment involves maintaining two identical production environments (blue and green) and switching traffic between them during deployments to minimize downtime.</td>
            <td>https://martinfowler.com/bliki/BlueGreenDeployment.html</td>
        </tr>
        <tr>
            <td>21</td>
            <td>Docker</td>
            <td>Docker is a containerization platform that allows you to package applications and their dependencies into containers, ensuring consistency and portability across different environments.</td>
            <td><a href="https://www.docker.com/what-docker" target="_blank">Docker Official Website</a></td>
        </tr>
        <tr>
            <td>22</td>
            <td>Container</td>
            <td>A container is a lightweight, standalone executable package that includes everything needed to run a piece of software, including the code, runtime, system tools, and libraries.</td>
            <td><a href="https://www.docker.com/resources/what-container" target="_blank">Docker Containers</a></td>
        </tr>
        <tr>
            <td>23</td>
            <td>Docker Image</td>
            <td>A Docker image is a read-only template that contains a set of instructions for creating a Docker container. It serves as a blueprint for containers.</td>
            <td><a href="https://docs.docker.com/glossary/image/" target="_blank">Docker Image Reference</a></td>
        </tr>
        <tr>
            <td>24</td>
            <td>Dockerfile</td>
            <td>A Dockerfile is a text file that contains a set of instructions for building a Docker image. It specifies the base image, application code, and configuration.</td>
            <td><a href="https://docs.docker.com/engine/reference/builder/" target="_blank">Dockerfile Reference</a></td>
        </tr>
        <tr>
            <td>25</td>
            <td>Docker Compose</td>
            <td>Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to define services, networks, and volumes in a single YAML file.</td>
            <td><a href="https://docs.docker.com/compose/" target="_blank">Docker Compose Overview</a></td>
        </tr>
        <tr>
            <td>26</td>
            <td>Docker Registry</td>
            <td>A Docker Registry is a repository for storing and distributing Docker images. Docker Hub is a popular public registry, and you can also set up private registries.</td>
            <td><a href="https://docs.docker.com/registry/" target="_blank">Docker Registry Documentation</a></td>
        </tr>
        <tr>
            <td>27</td>
            <td>Container Orchestration</td>
            <td>Container Orchestration is the process of managing the deployment, scaling, and coordination of containerized applications across a cluster of machines. Kubernetes is a widely-used orchestration tool.</td>
            <td><a href="https://kubernetes.io/docs/home/" target="_blank">Kubernetes Documentation</a></td>
        </tr>
        <tr>
            <td>28</td>
            <td>Docker Swarm</td>
            <td>Docker Swarm is Docker's native clustering and orchestration solution. It allows you to create and manage a swarm of Docker nodes as a single virtual system.</td>
            <td><a href="https://docs.docker.com/engine/swarm/" target="_blank">Docker Swarm Mode Documentation</a></td>
        </tr>
        <tr>
            <td>29</td>
            <td>Containerization vs. Virtualization</td>
            <td>Containerization is a lightweight form of virtualization that allows multiple containers to run on a single host OS, whereas virtualization involves running multiple virtual machines with their own OS on a single physical server.</td>
            <td><a href="https://www.docker.com/resources/what-container" target="_blank">Containerization vs. Virtualization</a></td>
        </tr>
        <tr>
            <td>30</td>
            <td>Docker Hub</td>
            <td>Docker Hub is a cloud-based registry service provided by Docker that allows you to discover, share, and distribute Docker images. It hosts a vast collection of pre-built images.</td>
            <td><a href="https://hub.docker.com/" target="_blank">Docker Hub</a></td>
        </tr>
<tr>
    <td>31</td>
    <td>Terraform</td>
    <td>Terraform is an open-source infrastructure as code (IaC) tool that allows you to define and provision infrastructure resources using declarative configuration files. It enables the automation of infrastructure provisioning and management.</td>
    <td><a href="https://www.terraform.io/" target="_blank">Terraform Official Website</a></td>
</tr>
<tr>
    <td>32</td>
    <td>Infrastructure as Code (IaC)</td>
    <td>Infrastructure as Code (IaC) is a practice of managing and provisioning infrastructure resources using code and automation tools like Terraform. IaC enables version control, consistency, and repeatability of infrastructure deployments.</td>
    <td><a href="https://www.terraform.io/intro/what-is-terraform.html" target="_blank">Terraform - What is Terraform?</a></td>
</tr>
<tr>
    <td>33</td>
    <td>Terraform Configuration Language (HCL)</td>
    <td>Terraform Configuration Language (HCL) is the domain-specific language used to write configuration files for Terraform. It allows you to define resources, variables, and dependencies in a human-readable format.</td>
    <td><a href="https://www.terraform.io/docs/language/index.html" target="_blank">Terraform - Configuration Language</a></td>
</tr>
<tr>
    <td>34</td>
    <td>Terraform Module</td>
    <td>A Terraform module is a reusable and self-contained set of Terraform configurations that define a specific piece of infrastructure. Modules promote code organization and reusability.</td>
    <td><a href="https://www.terraform.io/docs/modules/index.html" target="_blank">Terraform - Modules</a></td>
</tr>
<tr>
    <td>35</td>
    <td>Provider</td>
    <td>In Terraform, a provider is a plugin that defines and configures the resources and services available for provisioning. Providers are responsible for interacting with APIs of various infrastructure platforms, such as AWS, Azure, or GCP.</td>
    <td><a href="https://www.terraform.io/docs/providers/index.html" target="_blank">Terraform - Providers</a></td>
</tr>
<tr>
    <td>36</td>
    <td>Terraform State</td>
    <td>Terraform state is a representation of the resources managed by Terraform and their current state. It helps Terraform track resource changes and manage updates, ensuring infrastructure drift detection.</td>
    <td><a href="https://www.terraform.io/docs/state/index.html" target="_blank">Terraform - State</a></td>
</tr>
<tr>
    <td>37</td>
    <td>Plan and Apply</td>
    <td>In Terraform, "plan" and "apply" are two essential commands. "terraform plan" generates an execution plan to show what changes will be made to the infrastructure. "terraform apply" then applies those changes if confirmed.</td>
    <td><a href="https://www.terraform.io/docs/commands/plan.html" target="_blank">Terraform - terraform plan</a><br><a href="https://www.terraform.io/docs/commands/apply.html" target="_blank">Terraform - terraform apply</a></td>
</tr>
<tr>
    <td>38</td>
    <td>Remote State Backend</td>
    <td>A remote state backend is a storage location for Terraform state files, allowing teams to collaborate and share state data securely. Common backends include Amazon S3, Azure Blob Storage, and HashiCorp Consul.</td>
    <td><a href="https://www.terraform.io/docs/language/state/backends.html" target="_blank">Terraform - State Backends</a></td>
</tr>
<tr>
    <td>39</td>
    <td>Variable</td>
    <td>Terraform variables allow you to parameterize your configurations, making them more flexible and reusable. You can define variables and assign values in your Terraform code or use input variables.</td>
    <td><a href="https://www.terraform.io/docs/language/values/variables.html" target="_blank">Terraform - Variables</a></td>
</tr>
<tr>
    <td>40</td>
    <td>Output</td>
    <td>Outputs in Terraform allow you to define values that are exposed to users or other Terraform configurations. They provide a way to capture and share information about the infrastructure being provisioned.</td>
    <td><a href="https://www.terraform.io/docs/language/values/outputs.html" target="_blank">Terraform - Outputs</a></td>
</tr>

        
    </table>
</body>
</html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
