<h1>MongoDB Instructions</h1>
<ul>
<li>Enter <code>touch mongodb-org-3.6.repo</code> into the terminal</li>
<br>
<li>Now open the <strong>mongodb-org-3.6.repo</strong> file in your code editor (select it from the left-hand file menu) and paste the following into it then save the file:</li>
<br>
<code>  
<pre>
mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
</pre>
</code>
<br>
<li>Now run the following in your terminal:</li>
<br>
<p>sudo mv mongodb-org-3.6.repo /etc/yum.repos.d</p>
<p>sudo yum install -y mongodb-org</p>
<br>
<li>Close the <code>mongodb-org-3.6.repo</code> file and press Close tab when prompted</li>
<br>
<li>Change directories back into root <strong>~</strong> by entering cd into the terminal then enter the following commands:</li>
<br>
<p>mkdir data</p>
<p>echo 'mongod --dbpath=data --nojournal' > mongod</p>
<p>chmod a+x mongod</p>
<br>
<li>Now test mongod with <code>./mongod</code>
<br>
<li>Remember, you must first enter <strong>cd</strong> to change directories into root <strong>~</strong> before running <code>./mongod</code></li>
<br>
<li>Don't forget to shut down <strong>./mongod</strong> with <code>ctrl + c</code> each time you're done working</li>
</ul>
