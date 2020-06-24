<h1>MongoDB Instructions</h1>
<ul>
<li>Enter <code>touch mongodb-org-3.6.repo</code> into the terminal</li>
<br>
<li>Now open the <strong>mongodb-org-3.6.repo</strong> file in your code editor (select it from the left-hand file menu) and paste the following into it then save the file:</li>
<br>
<code>
[mongodb-org-3.6]
  <br>
name=MongoDB Repository
  <br>
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/<br>
gpgcheck=1
  <br>
enabled=1
  <br>
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
  <br>
</code>
<br>
<li>Now run the following in your terminal:</li>
<br>
<code>
sudo mv mongodb-org-3.6.repo /etc/yum.repos.d
  <br>
sudo yum install -y mongodb-org
  <br>
</code>
<br>
<li>Close the <code>mongodb-org-3.6.repo</code> file and press Close tab when prompted</li>
<br>
<li>Change directories back into root <strong>~</strong> by entering cd into the terminal then enter the following commands:</li>
<br>
<code>
mkdir data
  <br>
echo 'mongod --dbpath=data --nojournal' > mongod
  <br>
chmod a+x mongod
  <br>
</code>
<br>
<li>Now test mongod with <code>./mongod</code>
<br>
<li>Remember, you must first enter <strong>cd</strong> to change directories into root <strong>~</strong> before running <code>./mongod</code></li>
<br>
<li>Don't forget to shut down <strong>./mongod</strong> with <code>ctrl + c</code> each time you're done working</li>
</ul>
