require 'optparse'
require "date"
$date = Date.today
$selector
def cmdline
  args = {}
  OptionParser.new do |parser|
    parser.on("--position VALUE", "Want to get Main branch Options"){|v| args[:selector] = v}
    parser.parse!(ARGV)
  end
  args
end

args = cmdline
$selector = args[:selector]

if($selector == nil)
  $selector = "HEAD"
end

def git_Diff
  if($selector != nil)
    $value = "git archive #{$selector} --format=zip -o archive#{$date.year}#{$date.month}#{$date.day}.zip `git diff --name-only origin/master #{$selector}`"
  else
    print "\e[31m"
    puts "WARNING! Please pass your branch!"
    print "\e[0m"
    exit
  end
end

def openArchive
  $openCommand = "open archive#{$date.year}#{$date.month}#{$date.day}.zip"
end

git_Diff()
openArchive()
system($value)
system($openCommand)
