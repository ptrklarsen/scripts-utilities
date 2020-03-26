#! /usr/bin/env python

import webbrowser
import subprocess
import shutil
import os
import subprocess

webbrowser.open("https://thinklabs-team.monday.com/boards/279537943")
webbrowser.open("https://docs.google.com/spreadsheets/d/1JthKx6HHHBSQ0zxktlJ9AdTsAmLSaL7l8PNMUE2rCYo/edit#gid=0")
webbrowser.open("https://mail.google.com/mail/u/0/#inbox")
webbrowser.open("https://thinklabsservice.freshdesk.com/support/login")
webbrowser.open("https://app.prosperworks.com/companies/45172/app?p=db#/dashboard/user/759574/today")

source = '/Users/patricklarsen/Desktop/'
dest = '/Users/patricklarsen/Google Drive File Stream/My Drive/process these/'
files = os.listdir(source)

def ds_store():
    try:
        os.remove(dest + ".DS_Store")
    except:
        pass

ds_store()

for f in files: 
    shutil.move(source + f , dest)

