<h1>MongoDB Instructions</h1>
<ul>
<li>Enter touch mongodb-org-3.6.repo into the terminal</li>
<li>Now open the mongodb-org-3.6.repo file in your code editor (select it from the left-hand file menu) and paste the following into it then save the file:</li>
<br>
<p>
[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
</p>
<li>Now run the following in your terminal:</li>
<br>
<ul>
<li>sudo mv mongodb-org-3.6.repo /etc/yum.repos.d</li>
<li>sudo yum install -y mongodb-org</li>
</ul>
<li>Close the mongodb-org-3.6.repo file and press Close tab when prompted</li>
<li>Change directories back into root ~ by entering cd into the terminal then enter the following commands:</li>
<br>
<ul>
<li>mkdir data</li>
<li>echo 'mongod --dbpath=data --nojournal' > mongod</li>
<li>chmod a+x mongod</li>
</ul>
<li>Now test mongod with ./mongod
<li>Remember, you must first enter cd to change directories into root ~ before running ./mongod</li>
<li>Don't forget to shut down ./mongod with ctrl + c each time you're done working</li>
</ul>
