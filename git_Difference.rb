require 'optparse'

def cmdline
  args = {}
  OptionParser.new do |parser|
    parser.on("--position VALUE", "Want to get Main branch Options"){|v| args[:selector] = v}
    parser.parse!(ARGV)
  end
  args
end

args = cmdline
SELECTOR = args[:selector]

if(SELECTOR == nil)
    SELECTOR = "HEAD^"
end

def git_Diff
  if(SELECTOR != nil)
    $value = "git archive #{SELECTOR} `git diff --name-only origin/master #{SELECTOR}` -o archive.zip"
  else
    print "\e[31m"
    puts "WARNING! Please pass your branch!"
    print "\e[0m"
    exit
  end
end

git_Diff()
system($value)
