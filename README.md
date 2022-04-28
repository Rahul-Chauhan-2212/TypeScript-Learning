# TypeScript-Learning

## This Repo is created for TypeScript Basic Learning

### TypeScript is a super set of JavaScript

1)Installing typescript </br>
a)Install node </br>
b)Install Typescript </br>

<p style="color:red;">npm install -g typescript</p>

2)Setting up Fundamentals Training Workspace </br>
a)Create folder</br>
b)create index.html with app.js as script</br>
c)create app.ts</br>
d)run below command to add dependencies in project

<p>npm init</p>
e)Then install lite server which is live server to reflet on the fly changes
<p>npm install --save-dev lite-server</p>
f)Run lite server in the root folder of index.html
<p>npm start</p>
g)running project after cloning
<p>npm install</p>
<p>npm start</>

3)Core Types </br>

<ul>
   <li>number ---> 1,5.3,-10</li>
   <li>string --->'Hi',"Hi",`Hi`</li>
   <li>boolean --->true, false</li>
   <li>object --->{age:30,name:'Rahul'}</li>
   <li>Array --->[1,2,3]</li>
   <li>Tuple --->[1,2]</li> fixed length and fixed type array
   <li>Enum ---->enum{NEW,OLD}</li>
   <li>Any</li>
   <li>Union  --->number|string</li>
   <li>Literal Types</li>
   <li>Type Aliases</li>
   <li>Function Types</li>
   <li>Function Types and CallBacks</li>
   <li>Unknown Type</li>
   <li>Never Type</li>
</ul>

4)Watch Node </br>
so that whenver a ts file is changes it automatically compiles

<p>tsc app.ts --watch</p>
<p>tsc app.ts -w</p>
Note:: Don't quit/CTRL+C, till you want this file to be in watch node

5)Compiling complete project </br>

<p>tsc --init</p>
creates a tsconfig.json file 
<p>tsc --watch</p>
compiles all project in watch mode

6)Excluding and including files while compilation
Add Below lines in tsconfig.json

 <p>"exclude": ["node_modules"],
  "include": ["app.ts", "analytics.ts"]</p>

7)Changing Compiler target</br>
change target version in tsconfig.json

8)Source map</br>
change source map property to true in tsconfig.json</br>
this is used to debug the source and will generate .js.map file

9)RootDir and OutDir</br>
outDir for js files</br>
rootDir for ts files

10)noEmmitOnError=true
don't create js file if ts file has errors

11)Enable all Strict Type Checking options</br>
"strict": true</br>
if want to disable some strict compilations then set that as false

12)There are some Quality Options too

<ul>
<li>"noUnusedLocals": true</li>
<li>"noUnusedParameters": true</li>
<li>"exactOptionalPropertyTypes": true</li>
 <li>"noImplicitReturns": true</li>
 <li>"noFallthroughCasesInSwitch": true</li>
 <li>"noUncheckedIndexedAccess": true</li>
<li>"noImplicitOverride": true</li>
<li>"noPropertyAccessFromIndexSignature": true</li>
<li>"allowUnusedLabels": true</li>
<li>"allowUnreachableCode": true</li>
</ul>

13)Generics

14)Class

15)Interfaces
